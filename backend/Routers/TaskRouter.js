import Router from 'express'
import TaskController from '../Controllers/TaskController.js'

const taskRouter = new Router();

taskRouter.get('/', TaskController.get);
taskRouter.post('/', TaskController.create);
taskRouter.put('/', TaskController.update);
taskRouter.delete('/:id', TaskController.delete);

export default taskRouter;