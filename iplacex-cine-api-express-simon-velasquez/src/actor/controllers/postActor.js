import Actor from '../models/actores.js';

const postActor = async (req, res) => {
  try {
    const nuevoActor = new Actor(req.body);
    const actorGuardado = await nuevoActor.save();
    res.status(201).json(actorGuardado);
  } catch (err) {
    res.status(400).json({ error: 'Error al agregar actor' });
  }
};

export default postActor;
