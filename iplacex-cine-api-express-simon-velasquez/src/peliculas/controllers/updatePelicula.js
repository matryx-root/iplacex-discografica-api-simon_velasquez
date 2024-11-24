import Pelicula from '../models/pelicula.js';

export const updatePelicula = async (req, res) => {
  try {
    const { id } = req.params;
    const peliculaActualizada = await Pelicula.findByIdAndUpdate(id, req.body, { new: true });
    if (!peliculaActualizada) return res.status(404).send('Película no encontrada');
    res.json(peliculaActualizada);
  } catch (err) {
    res.status(500).send('Error al actualizar la película');
  }
};
