import Pelicula from '../models/pelicula.js';

const getPeliculas = async (req, res) => {
  try {
    const peliculas = await Pelicula.find();
    res.status(200).json(peliculas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las películas' });
  }
};

export default getPeliculas;
