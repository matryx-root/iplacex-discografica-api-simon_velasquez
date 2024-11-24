import Pelicula from '../models/pelicula.js';

export const postPelicula = async (req, res) => {
  try {
    const nuevaPelicula = new Pelicula(req.body);
    const peliculaGuardada = await nuevaPelicula.save();
    res.status(201).json(peliculaGuardada);
  } catch (err) {
    res.status(500).send('Error al agregar la película');
  }
};
