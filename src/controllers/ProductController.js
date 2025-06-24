const ProductService = require('../services/ProductService');

class ProductController {
  async search(req, res) {
    try {
      const result = await ProductService.search(req.query);
      return res.status(200).json(result);
    } catch (error) {
      return res.status(400).json({ error: 'Product search failed.', details: error.message });
    }
  }
  
  async getById(req, res) {
  try {
    const product = await ProductService.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found.' });
    }
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch product.' });
  }
}

  async create(req, res) {
    try {
      await ProductService.create(req.body);
      return res.status(201).send();
    } catch (error) {
      return res.status(400).json({ error: 'Failed to create product.', details: error.message });
    }
  }

  async update(req, res) {
    try {
      const success = await ProductService.update(req.params.id, req.body);
      if (!success) return res.status(404).json({ error: 'Product not found.' });
      return res.status(204).send();
    } catch (error) {
      return res.status(400).json({ error: 'Failed to update product.', details: error.message });
    }
  }

  async delete(req, res) {
    const success = await ProductService.delete(req.params.id);
    if (!success) return res.status(404).json({ error: 'Product not found.' });
    return res.status(204).send();
  }
}

module.exports = new ProductController();