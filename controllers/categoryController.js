const Category = require('../models/Category');
const Product = require('../models/Product');


getAllCategories = async (req, res) => {

    try {
      const categories = await Category.find();
  
      const result = await Promise.all(categories.map(async (cat) => {
        const product = await Product.findOne({ categoryId: cat._id, image: { $exists: true, $ne: "" } }).sort({ createdAt: -1 });
        console.log(product?.image?.[0]);
        return {
          name: cat.name,
          slug: cat.slug,
          thumbnail: product?.image || null
        };
  
      }));
     
  
      res.json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  


module.exports = {
    getAllCategories
  };
