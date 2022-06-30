import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import Order from '../models/orderModel.js';
import User from '../models/userModel.js';
import Baguetest from '../models/baguetestModel.js'
import { isAdmin, isAuth } from '../util.js';

const orderRouter = express.Router();
orderRouter.get(
  '/mine',
  isAuth,
  expressAsyncHandler(async (req, res) => {
    const orders = await Order.find({ user: req.user._id });
    res.send(orders);
  })
);

orderRouter.post(
    '/',
    isAuth,
    expressAsyncHandler(async (req, res) => {
      if (req.body.orderItems.length === 0) {
        res.status(400).send({ message: 'Cart is empty' });
      } else {
        const order = new Order({
          orderItems: req.body.orderItems,
          shippingAddress: req.body.shippingAddress,
          paymentMethod: req.body.paymentMethod,
          itemsPrice: req.body.itemsPrice,
          itemPrice: req.body.itemPrice,

          shippingPrice: req.body.shippingPrice,
          totalPrice: req.body.totalPrice,
          user: req.user._id,
        });
        const createdOrder = await order.save();
      res
        .status(201)
        .send({ message: 'New Order Created', order: createdOrder });
    }
  })
);
orderRouter.get('/:id',isAuth, expressAsyncHandler(async(req, res)=>{
  const order = await Order.findById(req.params.id);
  if(order)
  {
    res.send(order);
  }
  else{
    res.status(404).send({message:'Order not found'});
  }
}));
orderRouter.get(
  '/',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const orders = await Order.find({}).populate('user', 'name');
    res.send(orders);
  })
);
orderRouter.delete(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
      const deleteOrder = await order.remove();
      res.send({ message: 'Order Deleted', order: deleteOrder });
    } else {
      res.status(404).send({ message: 'Order Not Found' });
    }
  })
);
orderRouter.put(
  '/:id/deliver',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
      order.isDelivered = true;
      order.deliveredAt = Date.now();

      const updatedOrder = await order.save();
      res.send({ message: 'Order Delivered', order: updatedOrder });
    } else {
      res.status(404).send({ message: 'Order Not Found' });
    }
  })
);
orderRouter.get(
  '/summary',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const orders = await Order.aggregate([
      {
        $group: {
          _id: null,
          numOrders: { $sum: 1 },
          totalSales: { $sum: '$totalPrice' },
        },
      },
    ]);
    const users = await User.aggregate([
      {
        $group: {
          _id: null,
          numUsers: { $sum: 1 },
        },
      },
    ]);
    const dailyOrders = await Order.aggregate([
      {
        $group: {
          _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
          orders: { $sum: 1 },
          sales: { $sum: '$totalPrice' },
        },
      },
      { $sort: { _id: 1 } },
    ]);
    const baguetestCategories = await   Baguetest.aggregate([
      {
        $group: {
          _id: '$categorie',
          count: { $sum: 1 },
        },
      },
    ]);
    res.send({ users, orders, dailyOrders, baguetestCategories });
  })
);




export default orderRouter;