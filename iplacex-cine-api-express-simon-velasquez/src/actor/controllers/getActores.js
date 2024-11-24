import Actor from '../models/actores.js';

export const getActores = async (req, res) => {
  try {
    const actores = await Actor.find();
    res.json(actores);
  } catch (error) {
    res.status(500).send('Error al obtener los actores');
  }
};
