import Pelicula from '../models/pelicula.js';

const deletePelicula = async (req, res) => {
  try {
    const peliculaEliminada = await Pelicula.findByIdAndDelete(req.params.id);
    if (!peliculaEliminada) return res.status(404).send('Película no encontrada');
    res.json({ mensaje: 'Película eliminada con éxito' });
  } catch (err) {
    res.status(500).send('Error al eliminar película');
  }
};

export default deletePelicula;
