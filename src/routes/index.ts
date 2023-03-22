import { Router } from 'express';
import usersRoutes from './api/users.routes';
import blogRoutes from './api/blog';
import catagoryRouter from './api/catogry.routes';
import authorRouter from './api/author.routes';
import purchaseRouter from './api/purchase.routes';
import orderRouter from './api/order.routes';

const routes = Router();

routes.use('/users', usersRoutes);
routes.use('/book', blogRoutes);
routes.use('/catagory', catagoryRouter);
routes.use('/author', authorRouter);
routes.use('/purchase', purchaseRouter);
routes.use('/order', orderRouter);
export default routes;
