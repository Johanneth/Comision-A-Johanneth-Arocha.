import { Router } from "express" ;
import { ctrlCreateTask, ctrlDeleteTask, ctrlGetTasks, ctrlUpdateTask, ctrlView } from "../controllers/task.controllers.js"
import { createTaskSchema, editTaskSchema } from "../models/schemas/task.schema.js";
import { validator } from "../middlewares/validator.js"


const taskRouter = Router ();

//Ruta para las vistas
taskRouter.get('/tasks', ctrlView)

//endpoint para traer todas las tareas
taskRouter.get('/api/tasks', ctrlGetTasks)

//endpoint para crear todas las tareas
taskRouter.post('/api/tasks', createTaskSchema, validator, ctrlCreateTask)

//endpoint para modificar todas las tareas
taskRouter.put('/api/tasks/:id', editTaskSchema, validator, ctrlUpdateTask)

//endpoint para eliminar todas las tareas
taskRouter.delete('/api/tasks/:id', ctrlDeleteTask )

export { taskRouter }