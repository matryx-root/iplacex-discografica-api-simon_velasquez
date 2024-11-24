import mongoose from 'mongoose';

const actorSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  edad: { type: Number, required: true },
  peliculas: [String], // Películas en las que participó
  estaRetirado: { type: Boolean, required: true },
  premios: [String],
});

const Actor = mongoose.model('Actor', actorSchema);

export default Actor;
