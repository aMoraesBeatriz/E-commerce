const { Product } = require('../models/Product');

const home = async (_, res) => {
  try {
    const products = await Product.findAll({
      limit: 5 //limite de 5 produtos para mostrar na home
    });

    //passa os produtos para o index
    res.render('index', { products });
  } catch (error) {
    console.error(error);
    res.status(500).send('Erro ao carregar a home');
  }
};

module.exports = {
  home
};
