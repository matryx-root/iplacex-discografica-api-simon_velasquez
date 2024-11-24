import express from 'express';
import { getPeliculas } from './controllers/getPeliculas.js';
import { postPelicula } from './controllers/postPelicula.js';
import { updatePelicula } from './controllers/updatePelicula.js';
import { deletePelicula } from './controllers/deletePelicula.js';

const router = express.Router();

router.get('/', getPeliculas);
router.post('/', postPelicula);
router.put('/:id', updatePelicula);
router.delete('/:id', deletePelicula);

export default router;
