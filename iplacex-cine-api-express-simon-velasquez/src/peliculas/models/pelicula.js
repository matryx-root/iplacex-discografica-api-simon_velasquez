import mongoose from 'mongoose';

const peliculaSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  genero: { type: String, required: true },
  anioEstreno: { type: Number, required: true },
  actores: [String] // Lista de actores
});

const Pelicula = mongoose.model('Pelicula', peliculaSchema);

export default Pelicula;
