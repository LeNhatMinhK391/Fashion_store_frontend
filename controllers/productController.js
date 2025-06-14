const Product = require('../models/Product');

// Lấy danh sách sản phẩm
getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



module.exports = {
    getAllProducts
  };