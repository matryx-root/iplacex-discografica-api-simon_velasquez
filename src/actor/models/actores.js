import mongoose from 'mongoose';


const actorSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  edad: { type: Number, required: true },
  peliculas: [String], // Lista de películas
  estaRetirado: { type: Boolean, required: true },
  premios: [String], // Premios obtenidos
});

const Actor = mongoose.model('Actor', actorSchema, 'actores');

export default Actor;
