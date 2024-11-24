import express from 'express';
import getActores from './controllers/getActores.js';
import postActor from './controllers/postActor.js';
import updateActor from './controllers/updateActor.js';
import deleteActor from './controllers/deleteActor.js';

const router = express.Router();

router.get('/', getActores);
router.post('/', postActor);
router.put('/:id', updateActor);
router.delete('/:id', deleteActor);

export default router;
