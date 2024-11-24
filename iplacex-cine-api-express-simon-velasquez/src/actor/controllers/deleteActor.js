import Actor from '../models/actores.js';

export const deleteActor = async (req, res) => {
  try {
    const actorEliminado = await Actor.findByIdAndDelete(req.params.id);
    if (!actorEliminado) {
      return res.status(404).json({ error: 'Actor no encontrado' });
    }
    res.status(200).json({ message: 'Actor eliminado con éxito' });
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar actor' });
  }
};
