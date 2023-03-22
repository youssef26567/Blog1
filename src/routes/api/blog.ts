import { Router } from 'express';
import * as controllers from '../../controllers/blog.controller';
const route = Router();
route.route('/').get(controllers.GetMany).post(controllers.Create);
route.route('/:id').get(controllers.GetOne).delete(controllers.DELETE);
export default route;
