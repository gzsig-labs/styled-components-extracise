const axios = require('axios');

const allBeers = async (req, res) => {
  try {
    const beers = await axios.get('https://ih-beers-api2.herokuapp.com/beers/');
    return res.status(200).json(beers.data);
  } catch (error) {
    return res.status(500).json({ message: 'Deu ruim ao conectar no servidor.' });
  };
};

const singleBeer = async (req, res) => {
  const { beerId } = req.params;

  try {
    const beer = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`);
    return res.status(200).json(beer.data);
  } catch (error) {
    return res.status(500).json({ message: 'Deu ruim ao conectar no servidor.' });
  };
};

const randomBeer = async (req, res) => {
  try {
    const random = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`);
    return res.status(200).json(random.data);
  } catch (error) {
    return res.status(500).json({ message: 'Deu ruim ao conectar no servidor.' })
  };
};

const searchBeer = async (req, res) => {
  const { q } = req.query;

  try {
    const beers = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${q}`);

    if (beers.length === 0) {
      return res.status(200).json({ message: 'Nenhuma cerveja encontrada' });
    }

    return res.status(200).json(beers.data);

  } catch (error) {
    res.status(500).json({ message: 'Deu ruim ao conectar no servidor' });
  }
}

module.exports = {
  allBeers,
  singleBeer,
  randomBeer,
  searchBeer
};
