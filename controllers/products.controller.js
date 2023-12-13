import Product from '../models/product.model.js'
import { uploadImage, deleteImage } from '../utils/cloudinary.js'
import fs from 'fs-extra'

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    return res.json(products)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }

}

export const getProductis = async (req, res) => {
  let perPage = 6;
  let page = req.params.page;
  console.log(page);
  try {
    const products = await Product.find().
      skip((perPage * page) - perPage).limit(perPage);

    return res.json(products)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }

}

export const getProduct = async (req, res) => {

  try {
    const product = await Product.findById(req.params.id)

    if (!product) {
      return res.status(404).json({ message: 'Product not found' })
    }

    return res.json(product)

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const createProducts = async (req, res) => {

  try {
    const { name, province, description, post_id } = req.body

    //console.log(req.files)

    const product = new Product({
      name,
      province,
      description,
      post_id
    })

    if (req.files?.image) {
      const result = await uploadImage(req.files.image.tempFilePath)
      product.image = {
        public_id: result.public_id,
        secure_url: result.secure_url
      }
      await fs.unlink(req.files.image.tempFilePath)
    }

    await product.save()
    return res.json(product)

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const deleteProducts = async (req, res) => {

  try {
    const product = await Product.findByIdAndDelete(req.params.id)

    if (!product) {
      return res.status(404).json({ message: 'Product not found' })
    }

    if (product.image?.public_id) {
      await deleteImage(product.image.public_id)
    }

    return res.json(product)

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const updateProducts = async (req, res) => {

  try {
    const productUpdated = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })

    return res.json(productUpdated)

  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
