const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const loginRoute = require('./Routes/login');
const signupRoute = require('./Routes/signup');
const userRoute = require('./Routes/user');
const logoutRoute = require('./Routes/logout');
const cartRoute = require('./Routes/cart');
const pastordersRoute = require('./Routes/pastorder');
const orderRoute = require('./Routes/order');
const showOrderRoute = require('./Routes/showorder')
const statusRoute = require('./Routes/status')
const availableRoute = require('./Routes/available');
const categoryRoute = require('./Routes/category');
const itemRoute = require('./Routes/item');

const app = express();
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.json());
app.use(cookieParser());

app.use(loginRoute);
app.use(signupRoute);
app.use(logoutRoute);
app.use(userRoute);
app.use(cartRoute);
app.use(pastordersRoute);
app.use(orderRoute);
app.use(showOrderRoute);
app.use(statusRoute);
app.use(availableRoute);
app.use(categoryRoute);
app.use(itemRoute);

app.listen(5000, () => {
  console.log("Backend started on port 5000");
});
