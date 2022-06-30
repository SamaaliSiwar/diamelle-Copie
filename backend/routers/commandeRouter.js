import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Diamant from '../models/diamantModel.js';
import Commande from '../models/commandeModel.js';
import User from '../models/userModel.js';
import { isAdmin, isAuth } from '../util.js';

const commandeRouter = express.Router();
commandeRouter.get(
  '/mine',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const  commandes = await  Commande.find({ user: req.user._id });
    res.send( commandes);
  })
);

commandeRouter.post(
    '/',
    isAuth,
    expressAsyncHandler(async (req, res) => {
      if (req.body.commandeItems.length === 0) {
        res.status(400).send({ message: 'Cart is empty' });
      } else {
        const  commande = new Commande({
          commandeItems: req.body. commandeItems,
          laivraisonAddress: req.body.laivraisonAddress,
          paymentRecommandation: req.body.paymentRecommandation,
          itemsPrice: req.body.itemsPrice,
          adressePrice: req.body.adressePrice,
          totalPrice: req.body.totalPrice,
          user: req.user._id,
        });
        const createdCommande= await  commande.save();
      res
        .status(201)
        .send({ message: 'New Order Created',  commande: createdCommande });
    }
  })
);
commandeRouter.get('/:id',isAuth, expressAsyncHandler(async(req, res)=>{
  const commande = await  Commande.findById(req.params.id);
  if(commande)
  {
    res.send(commande);
  }
  else{
    res.status(404).send({message:'Order not found'});
  }
}));
commandeRouter.get(
  '/',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const commandes = await Commande.find({}).populate('user', 'name');
    res.send(commandes);
  })
);
commandeRouter.delete(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const commande = await Commande.findById(req.params.id);
    if (commande) {
      const deleteCommande = await commande.remove();
      res.send({ message: 'Order Deleted', order: deleteCommande });
    } else {
      res.status(404).send({ message: 'Order Not Found' });
    }
  })
);
commandeRouter.put(
  '/:id/deliver',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const commande = await Commande.findById(req.params.id);
    if (commande) {
      commande.isDelivered = true;
      commande.deliveredAt = Date.now();

      const updatedCommande = await commande.save();
      res.send({ message: 'Order Delivered', order: updatedCommande});
    } else {
      res.status(404).send({ message: 'Order Not Found' });
    }
  })
);
commandeRouter.get(
  '/summary',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
   
    const users = await User.aggregate([
      {
        $group: {
          _id: null,
          numUsers: { $sum: 1 },
        },
      },
    ]);
  
    const diamantShapes = await   Diamant.aggregate([
      {
        $group: {
          _id: '$categorie',
          count: { $sum: 1 },
        },
      },
    ]);
    res.send({ users,  diamantShapes });
  })
);



export default  commandeRouter;