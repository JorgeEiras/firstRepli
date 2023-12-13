

import mongoose from 'mongoose'


const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  province: {
    type: String,
    required: true,
    trim: true,
    unique: false
  },
  description: {
    type: String,
    trim: true
  },
  image: {
    public_id: String,
    secure_url: String
  },
  post_id: {
    type: Number,
      required: true,
      unique: true
  }
}, 
{
  timestamps: true
});

export default mongoose.model('Product', productSchema)


