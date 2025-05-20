const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://danbuonno1:Kianatuna25.@fashion.nxm7znh.mongodb.net/fashionstore?retryWrites=true&w=majority")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));


const productRoutes = require('./routes/product');
app.use('/api/products', productRoutes);

const slideRoutes = require('./routes/slider')
app.use('/api/sliders', slideRoutes)

const categoryRoutes = require('./routes/category')
app.use('/api/categories', categoryRoutes)


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
