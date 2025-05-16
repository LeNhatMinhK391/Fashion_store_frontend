const Product = require('../models/Slider');

// Lấy danh sách sản phẩm
getAllSliders = async (req, res) => {
  try {
    const sliders = await Product.find();
    res.json(sliders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



module.exports = {
    getAllSliders
  };