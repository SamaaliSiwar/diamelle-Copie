import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Diamant from '../models/diamantModel.js';
import { isAdmin, isAuth } from '../util.js';
const diamantRouter = express.Router();
diamantRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const shape = req.query.shape || '';
    const order = req.query.order || '';

    const shapeFilter = shape ? { shape } : {};
    const sortOrder =
    order === 'lowest'
    ? { price: 1 }
    : order === 'highest'
    ? { price: -1 }
    : order === 'toprated'
    ? { rating: -1 }
    : { _id: -1 };
    const diamants = await Diamant.find({
      ...shapeFilter,
    }).sort(sortOrder);
    res.send(diamants);
  })
);
diamantRouter.get(
  '/shapes',
  expressAsyncHandler(async (req, res) => {
    const shapes = await Diamant.find().distinct('shape');
    res.send(shapes);
  })
);
  
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
        res.send({ message: 'Product Updated', diamants: updatedDiamant});
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