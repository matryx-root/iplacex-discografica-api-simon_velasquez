import Actor from '../models/actores.js';

const updateActor = async (req, res) => {
  try {
    const actorActualizado = await Actor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!actorActualizado) return res.status(404).send('Actor no encontrado');
    res.json(actorActualizado);
  } catch (err) {
    res.status(500).send('Error al actualizar el actor');
  }
};

export default updateActor;
