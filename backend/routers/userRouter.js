import express  from "express";
import bcrypt from "bcryptjs";
import data from "../data.js";
import expressAsyncHandler from 'express-async-handler';
import User from "../models/userModel.js";
import { generateToken, isAdmin, isAuth } from "../util.js";
import PasswordReset from "../models/passwordresetModel.js";
import nodemailer from "nodemailer";
import { v4 as uuidv4 } from "uuid";

const userRouter = express.Router();
const user = "diamellepfe@gmail.com";
const pass = "diamelle12345";
const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: user,
        pass: pass,
    },
});




userRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
    //await User.remove({});
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
  })
);
//create singin router
userRouter.post('/signin',expressAsyncHandler(async(req, res)=>{
  const user= await User.findOne({email:req.body.email});
  if(user){
    if(bcrypt.compareSync(req.body.password, user.password)){
      res.send(
        {
          _id:user._id,
          name:user.name,
          email:user.email,
          isAdmin:user.isAdmin,
          token:generateToken(user),

        }
      );
      return;
    }
  }
  res.status(401).send({message:'invalid user or password'});
}

)
);
//user registre 
//j'ai ajouter des modification
userRouter.post(
  '/register',
  expressAsyncHandler(async (req, res) => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
    });
    
    const createdUser = await user.save();
    res.send({
      _id: createdUser._id,
      name: createdUser.name,
      email: createdUser.email,
      isAdmin: createdUser.isAdmin,
      token: generateToken(createdUser),
    });
  })
);
userRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      res.send(user);
    } else {
      res.status(404).send({ message: 'User Not Found' });
    }
  })
);
userRouter.put(
  '/profile',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      if (req.body.password) {
        user.password = bcrypt.hashSync(req.body.password, 8);
      }
      const updatedUser = await user.save();
      res.send({
        _id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        isAdmin: updatedUser.isAdmin,
        token: generateToken(updatedUser),
      });
    }
  })
);
userRouter.get(
  '/',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const users = await User.find({});
    res.send(users);
  })
);
userRouter.delete(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      if (user.email === 'admin@example.com') {
        res.status(400).send({ message: 'Can Not Delete Admin User' });
        return;
      }
      const deleteUser = await user.remove();
      res.send({ message: 'User Deleted', user: deleteUser });
    } else {
      res.status(404).send({ message: 'User Not Found' });
    }
  })
);
userRouter.put(
  '/:id',
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id);
    if (user) {
      user.name = req.body.name || user.name;
      user.email = req.body.email || user.email;
      user.isAdmin = Boolean(req.body.isAdmin);
      ///user.isAdmin = req.body.isAdmin || user.isAdmin;
      const updatedUser = await user.save();
      res.send({ message: 'User Updated', user: updatedUser });
    } else {
      res.status(404).send({ message: 'User Not Found' });
    }
  })
);
userRouter.post(
  '/forget',expressAsyncHandler(async (req, res) => {
 const { email,redicectUrl}=req.body;
 //chercher si l'email existe
  User.find({email})
  .then((data)=>{
    if(data.length)
{
//user existe
//proceesd with email
sendResetEmail(data[0],redicectUrl,res);
}
else{
res.json({
  status:"FAILED",
  message:"No account with this email"
})
}
  })
  .catch(error=>{
    console.log(error);
    res.json({
      status:"FAILED",
      message:"user does not existe"
    })
  })
  }

))
//send password reset
const sendResetEmail= ({_id,email},redictUrl,res)=>{
  const resetString = uuidv4() + _id;
  //clear existing reset record
  PasswordReset
  .deleteMany({userId:_id})
  .then(
    result=>{
      //delete success
      //send email
      const sendForgotPassword = {
      
            from: user,
            to: email,
            subject: "Lien pour réinitialiser le mot de passe",
            html: `<div>
            'Vous recevez ceci parce que vous (ou quelqu'un d'autre) avez demandé la réinitialisation du mot de passe de votre compte.\n\n
            Veuillez cliquer sur le lien suivant ou collez-le dans votre navigateur pour terminer le processus dans l'heure suivant sa réception :\n\n 
            <a href=${redictUrl + "/" + _id +"/"+ resetString}>ici</a>
          Si vous ne l'avez pas demandé, veuillez ignorer cet e-mail et votre mot de passe restera inchangé.\n'
            </div>`,
        
    };
    //hash reset string
    const saltRounds=10;
    bcrypt
    .hash(resetString, saltRounds)
    .then(
      hashedResetString=>{
        //set value in password reset 
        const newPasswordResetString = new PasswordReset({
          userId:_id,
          resetString:hashedResetString,
          createdAt:Date.now(),
          expiresAt:Date.now()+360000
        });
        newPasswordResetString
        .save()
        .then(
          ()=>{
            transporter
            .sendMail(sendForgotPassword)
            .then( 
              ()=>
              {
                //reset email and pass
                res.json({
                  status:"PENDING",
                  message:"pass and reset send",
                })
              }
            )
            .catch(error=>{
              console.log(error)
              res.json({
                status:"FAILED",
                message:"error"
              })
            })
          }
        )
        .catch(error=>{
          console.log(error)
          res.json({
            status:"FAILED",
            message:"error"
          })
        })
        
      }
    )
    .catch(error=>{
      console.log(error);
      res.json({
       status:"FAILED",
       message:"error"
      });
    })
    
    }
  )
  .catch(error=>{
    console.log(error);
    res.json({
      status:"FAILED",
      message:"can not clear existing records!",
    });
   } )

  
}
//reset the password
userRouter.post('/resetpassword',
expressAsyncHandler(async (req,res)=>
{
let{userId,resetString,newPassword}=req.body;
PasswordReset
.find({userId})
.then(
  result=>{
    if(result.length > 0){
         const{expiresAt}=result[0];
         const hashedResetString =result[0].resetString;
         //chek for expireRset
         if( expiresAt <Date.now())
         {
          PasswordReset.deleteOne({userId})
          .then(
            //delet succuss
            res.json({
             status:"FAILED",
      message:"password reset Not found",
         })
          )
          .catch(
            error =>{
             res.json({
               status:"FAILED",
        message:"password reset Not found",
           })

            }
          )
         }
         else{
           //void reset record existe
            //compare the hash
            bcrypt
            .compare(resetString,hashedResetString)
            .then(
              (result)=>{
                if(result)
                {
                  const saltRounds=10;
                  bcrypt
                  .hash(newPassword,saltRounds)
                  .then(hashedNewPassword=>
                  {
                    //update pass
                    User
                    .updateOne({_id:userId},{password:hashedNewPassword})
                    .then(()=>{
                      //update complete
                      PasswordReset
                      .deleteOne({userId})
                      .then(
                        ()=>{
                        
                                res.json({
                              status:"SUCCESS",
                              message:"Password changed suuceccfuly",
                               })
                          }
                        
                      )
                      .catch(
                        error=>{
                          console.log(error);
                          res.json({
                            status:"FAILED",
                            message:"cheking password reset failed",
                             })
                        }
                      )

                    })
                    .catch(
                      error=>{
                        console.log(error);
                        res.json({
                          status:"FAILED",
                          message:"cheking password reset failed",
                           })
                      }
                    )
                  })
                  .catch(
                    error=>{
                      console.log(error);
                      res.json({
                        status:"FAILED",
                        message:"cheking password reset failed",
                         })
                    }
                  )

                }else{
                  //record in correct
                  res.json({
                    status:"FAILED",
                    message:"cheking password reset failed",
                     })
                }

              }
            )
            .catch(error =>{
              res.json({
                status:"FAILED",
                message:"cheking password reset failed",
                 })
            })
          
         }
    }else{
      res.json({
        status:"FAILED",
 message:"password reset Not found",
    })
    }
  }
)
.catch(error=>{
  console.log(error);
  res.json({
 status:"FAILED",
 message:"cheking password reset failed",
  })
})
}
)
)

export default userRouter;