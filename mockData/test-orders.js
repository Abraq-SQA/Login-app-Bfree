require('dotenv').config();

const connectDB = require('../db/connect');
const Order = require('../models/Order');

const jsonOrders = require('./orders.json');

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Order.deleteMany();
    await Order.create(jsonOrders);
    console.log('Success!!!!');
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
