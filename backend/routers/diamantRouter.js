import express from 'express';
import data from '../data.js';
import expressAsyncHandler from 'express-async-handler';
import Diamant from '../models/diamantModel.js';
import { isAdmin, isAuth } from '../util.js';
const diamantRouter = express.Router();
diamantRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const diamants = await Diamant.find({});
    res.send(diamants);
  })
);
diamantRouter.get(
    '/seed',
    expressAsyncHandler(async (req, res) => {
    //await Diamant.remove({});
      const createdDiamants = await Diamant.insertMany(data.diamants);
      res.send({ createdDiamants });
    })
  );
  //get by id details api
  diamantRouter.get(
    '/:id',
    expressAsyncHandler(async (req, res) => {
      const diamant = await Diamant.findById(req.params.id);
      if (diamant) {
        res.send(diamant);
      } else {
        res.status(404).send({ message: 'Product Not Found' });
      }
    })
  );
  diamantRouter.post(
    '/',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
      const diamant = new Diamant({
        shape: 'sample shape ' + Date.now(),
        image: '/images/diamants/round.jpg',
        price: 0,
        cut: 'sample cut',
        couleur: 'couleur',
        clarity: 'clarity',
        carat: '0.5',
        countInStock: 0,
      });
      const createdDiamants = await diamant.save();
      res.send({ message: 'Product Created', diamant: createdDiamants });
    })
  );
  diamantRouter.put(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
      const diamantId = req.params.id;
      const diamant = await Diamant.findById(diamantId);
      if (diamant) {
        diamant.shape = req.body.shape;
        diamant.price = req.body.price;
        diamant.image = req.body.image;
        diamant.cut = req.body.cut;
        diamant.couleur = req.body.couleur;
        diamant.countInStock = req.body.countInStock;
        diamant.clarity = req.body.clarity;
        diamant.carat= req.body.carat;

        const updatedDiamant = await diamant.save();
        res.send({ message: 'Product Updated', baguetest: updatedDiamant});
      } else {
        res.status(404).send({ message: 'Product Not Found' });
      }
    })
  );
  diamantRouter.delete(
    '/:id',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
      const diamant = await Diamant.findById(req.params.id);
      if (diamant) {
        const deleteDiamant= await diamant.remove();
        res.send({ message: 'Product Deleted', diamant: deleteDiamant });
      } else {
        res.status(404).send({ message: 'Product Not Found' });
      }
    })
  );
  export default diamantRouter;