import { Router } from 'express';
import * as controllers from '../../controllers/author.controller';
const router = Router();
router.route('/').get(controllers.GetAll).post(controllers.create);
export default router;
