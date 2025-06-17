const { Product } = require('../models/Product');

const list = async (req, res) => {
  try {
    const products = await Product.findAll(); //pega todos os produtos

    res.render('product/list', { products });
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao carregar a lista de produtos');
  }
};

module.exports = {
  list
};
