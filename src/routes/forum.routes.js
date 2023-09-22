import { Router } from "express" ;
import { ctrlCreateForum, ctrlDeleteForum, ctrlGetForums, ctrlUpdateForum, ctrlView } from "../controllers/forum.controllers.js"
import { createForumSchema, editForumSchema } from "../models/schemas/forum.schema.js";
import { validator } from "../middlewares/validator.js"



const forumRouter = Router ();

//Ruta para las vistas
forumRouter.get('/', ctrlView)

//endpoint para traer todas las tareas
forumRouter.get('/api/forums', ctrlGetForums)

//endpoint para crear todas las tareas
forumRouter.post('/api/forums', createForumSchema, validator, ctrlCreateForum)

//endpoint para modificar todas las tareas
forumRouter.put('/api/forums/:id', editForumSchema, validator, ctrlUpdateForum)

//endpoint para eliminar todas las tareas
forumRouter.delete('/api/forums/:id', ctrlDeleteForum)

export { forumRouter }