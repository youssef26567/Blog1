import * as controller from '../../controllers/purchase.controller';
import { Router } from 'express';
const router = Router();
router.route('/').get(controller.GetAll).post(controller.create);
export default router;
