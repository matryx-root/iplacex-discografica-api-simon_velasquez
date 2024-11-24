import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import actorRoutes from './src/actor/routes.js';
import peliculaRoutes from './src/peliculas/routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.get('/', (req, res) => res.send('Bienvenido al cine Iplacex'));
app.use('/api/actores', actorRoutes);
app.use('/api/peliculas', peliculaRoutes);

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Conectado a MongoDB Atlas'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));
// Inicio del servidor
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
