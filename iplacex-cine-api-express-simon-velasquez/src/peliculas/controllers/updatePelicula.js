import Pelicula from '../models/pelicula.js';

const updatePelicula = async (req, res) => {
  try {
    const peliculaActualizada = await Pelicula.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!peliculaActualizada) return res.status(404).send('Película no encontrada');
    res.json(peliculaActualizada);
  } catch (err) {
    res.status(500).send('Error al actualizar película');
  }
};

export default updatePelicula;
