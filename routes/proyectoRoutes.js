import express from 'express';
import {obtenerProyectos,
    nuevoProyecto,
     obtenerProyecto, 
     editarProyecto, 
     eliminarProyecto, 
     agregarColaborador, 
     eliminarColaborador,
     buscarColaborardor 
     } from '../controllers/proyectoControllers.js';
     import checkAuth from '../middleware/checkAuth.js';


const router = express.Router();

router.get('/', checkAuth, obtenerProyectos);
router.post('/', checkAuth, nuevoProyecto);
router.get('/:id', checkAuth, obtenerProyecto);
router.put('/:id', checkAuth, editarProyecto);
router.delete('/:id', checkAuth, eliminarProyecto);
router.post('/colaboradores/:id', checkAuth, agregarColaborador);
router.post('/colaboradores', checkAuth, buscarColaborardor)
router.post('/eliminar-colaboradores/:id', checkAuth, eliminarColaborador);

export default router;