const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      unique: true,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    color: {
      type: Array,
      required: true,
    },
    size: {
      type: Array,
      required: true,
      // enum: ['M', 'S', 'XL', 'L'],
      // default: "S"
    },
    image: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    categories: Array,
    inStock: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Product', productSchema);
