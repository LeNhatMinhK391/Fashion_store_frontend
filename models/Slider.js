const mongoose = require('mongoose');

const sliderSchema = new mongoose.Schema({
    title: String,
  image: { type: String, required: true },
  isActive: { type: Boolean, default: true }
});

module.exports = mongoose.model('Slider', sliderSchema);
