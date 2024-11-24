import mongoose from 'mongoose';

const peliculaSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  generos: [String], // Géneros como un array
  anioEstreno: { type: Number, required: true },
  actores: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Actor' }], // Referencia a actores
});

const Pelicula = mongoose.model('Pelicula', peliculaSchema);
export default Pelicula;
