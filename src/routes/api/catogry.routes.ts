import { Router } from 'express';
import * as controllers from '../../controllers/catagory.controllers';
const router = Router();
router.route('/').get(controllers.getMany).post(controllers.create);
export default router;
