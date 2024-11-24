import Pelicula from '../models/pelicula.js';

export const getPeliculas = async (req, res) => {
  try {
    const peliculas = await Pelicula.find();
    res.json(peliculas);
  } catch (err) {
    res.status(500).send('Error al obtener las películas');
  }
};
