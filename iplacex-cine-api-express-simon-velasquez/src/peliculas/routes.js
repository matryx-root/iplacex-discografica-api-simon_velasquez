import express from 'express';
import { getPeliculas, postPelicula, updatePelicula, deletePelicula } from './controllers/peliculas.js';

const router = express.Router();

// Rutas para películas
router.get('/', getPeliculas); // Obtener todas las películas
router.post('/', postPelicula); // Crear una película
router.put('/:id', updatePelicula); // Actualizar una película por ID
router.delete('/:id', deletePelicula); // Eliminar una película por ID

export default router;
