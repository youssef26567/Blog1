import * as controller from '../../controllers/order.controller';
import { Router } from 'express';
const router = Router();
router.route('/').get(controller.GetAll).post(controller.create);
router.route('/:id').get(controller.GetOne).delete(controller.deleteOne);
export default router;
