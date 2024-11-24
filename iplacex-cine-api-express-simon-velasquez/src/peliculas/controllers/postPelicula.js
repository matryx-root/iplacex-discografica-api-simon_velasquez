import Pelicula from '../models/pelicula.js';

const postPelicula = async (req, res) => {
  try {
    const nuevaPelicula = new Pelicula(req.body);
    const peliculaGuardada = await nuevaPelicula.save();
    res.status(201).json(peliculaGuardada);
  } catch (err) {
    res.status(400).send('Error al agregar película');
  }
};

export default postPelicula;
