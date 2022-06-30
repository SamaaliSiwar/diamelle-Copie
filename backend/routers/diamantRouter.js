import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import data from '../data.js';
import Diamant from '../models/diamantModel.js';
import { isAdmin, isAuth } from '../util.js';
const diamantRouter = express.Router();
diamantRouter.get(
  '/seed',
  expressAsyncHandler(async (req, res) => {
  //await Baguetest.remove({});
    const createdDiamant = await Diamant.insertMany(data.diamants);
    res.send({ createdDiamant });
  })
);
diamantRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const pageSize = 3;
    const page = Number(req.query.pageNumber) || 1;
    const min =
      req.query.min && Number(req.query.min) !== 0 ? Number(req.query.min) : 0;
    const max =
      req.query.max && Number(req.query.max) !== 0 ? Number(req.query.max) : 0;

    const shape = req.query.shape || '';
    const cut = req.query.cut || '';
    const couleur = req.query.couleur || '';
    const clarity = req.query.clarity || '';
    const order = req.query.order || '';
    const shapeFilter = shape ? { shape } : {};
    const cutFilter = cut ? { cut } : {};
    const couleurFilter = couleur ? { couleur } : {};
    const clarityFilter = clarity ? { clarity } : {};
    const caratFilter = min && max ? { carat: { $gte: min, $lte: max } } : {};

    const sortOrder =
    order === 'lowest'
    ? { price: 1 }
    : order === 'highest'
    ? { price: -1 }
    : order === 'toprated'
    ? { rating: -1 }
    : { _id: -1 };

    const count = await Diamant.count({
      ...shapeFilter,
      ...couleurFilter,
      ...cutFilter,
      ...clarityFilter,
      ...caratFilter,

    });
    const diamants = await Diamant.find({
      ...shapeFilter,
      ...couleurFilter,
      ...cutFilter,
      ...clarityFilter,
      ...caratFilter,

    }).sort(sortOrder)
    .skip(pageSize * (page - 1))
    .limit(pageSize);
    res.send({diamants, page, pages: Math.ceil(count / pageSize) });

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
  diamantRouter.post(
    '/',
    isAuth,
    isAdmin,
    expressAsyncHandler(async (req, res) => {
      const diamant = new Diamant({
        shape: 'sample name ' + Date.now(),
        image: '/images/bague1.jpg',
        price: 0,
        cut: 'good',
        carat: '0.1',
        clarity:'SI1',
        couleur:'E',
        countInStock: 0,
       
        description: 'sample description',
       
      });
      const createdDiamant = await diamant.save();
      res.send({ message: 'Product Created', diamant: createdDiamant });
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