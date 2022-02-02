import Router from 'express'
import ColumnController from '../Controllers/ColumnController.js'

const columnRouter = new Router();

columnRouter.get('/', ColumnController.get);
columnRouter.post('/', ColumnController.create);
columnRouter.put('/', ColumnController.update);
columnRouter.delete('/:id', ColumnController.delete);

export default columnRouter;