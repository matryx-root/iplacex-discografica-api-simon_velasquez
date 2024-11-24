import Actor from '../models/actores.js';

const deleteActor = async (req, res) => {
  try {
    const actorEliminado = await Actor.findByIdAndDelete(req.params.id);
    if (!actorEliminado) return res.status(404).send('Actor no encontrado');
    res.json({ mensaje: 'Actor eliminado con éxito' });
  } catch (err) {
    res.status(500).send('Error al eliminar el actor');
  }
};

export default deleteActor;
