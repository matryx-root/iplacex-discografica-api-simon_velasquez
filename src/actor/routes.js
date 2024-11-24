import express from 'express';
import { getActores } from './controllers/getActores.js';
import postActor from './controllers/postActor.js';

import updateActor from './controllers/updateActor.js'; // Correcto
import { deleteActor } from './controllers/deleteActor.js';

const router = express.Router();

router.get('/', getActores); // Obtener actores
router.post('/', postActor); // Crear actor
router.put('/:id', updateActor); // Actualizar actor
router.delete('/:id', deleteActor); // Eliminar actor

export default router;
