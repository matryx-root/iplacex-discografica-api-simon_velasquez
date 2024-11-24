import Pelicula from '../models/pelicula.js';

export const deletePelicula = async (req, res) => {
  try {
    const { id } = req.params;
    const peliculaEliminada = await Pelicula.findByIdAndDelete(id);
    if (!peliculaEliminada) return res.status(404).send('Película no encontrada');
    res.json({ mensaje: 'Película eliminada' });
  } catch (err) {
    res.status(500).send('Error al eliminar la película');
  }
};
