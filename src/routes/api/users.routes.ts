import { Router } from 'express';
import * as controllers from '../../controllers/users.controllers';
import authenticationMiddleware from '../../middleware/authentication.middleware';

const routes = Router();
// api/users
routes.route('/').get(controllers.getMany).post(controllers.create);
routes
  .route('/:id')
  .get(controllers.getOne)
  .get(controllers.FinfOne)
  .patch(authenticationMiddleware, controllers.updateOne)
  .delete(authenticationMiddleware, controllers.deleteOne);

// authentication
routes.route('/authenticate').post(controllers.authenticate);

export default routes;
