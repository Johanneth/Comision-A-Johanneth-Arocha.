import { Router } from "express" ;
import { ctrlCreateForum, ctrlDeleteForum, ctrlGetForums, ctrlUpdateForum, ctrlView } from "../controllers/forum.controllers.js"
import { createForumSchema, editForumSchema } from "../models/schemas/forum.schema.js";
import { validator } from "../middlewares/validator.js"



const forumRouter = Router ();

//Ruta para las vistas
forumRouter.get('/', ctrlView)

//endpoint para traer todas las tareas
forumRouter.get('/forums', ctrlGetForums)

//endpoint para crear todas las tareas
forumRouter.post('/forums', createForumSchema, validator, ctrlCreateForum)

//endpoint para modificar todas las tareas
forumRouter.put('/forums/:id', editForumSchema, validator, ctrlUpdateForum)

//endpoint para eliminar todas las tareas
forumRouter.delete('/forums/:id', ctrlDeleteForum)

export { forumRouter }