import { Request, Response, NextFunction } from 'express';
import ordermodel from '../models/order.model';
const OrderModel = new ordermodel();
export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const order = await OrderModel.create(req.body);
    res.json({
      status: 'success',
      data: { ...order },
      message: 'order Created Successfully',
    });
  } catch (error) {
    next(error);
  }
};
export const GetAll = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const order = await OrderModel.getMany();
    res.json({
      status: 'success',
      data: { order },
      message: 'order Showed Successfully',
    });
  } catch (error) {
    next(error);
  }
};
export const GetOne = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const order = await OrderModel.getOne(req.params.id as unknown as string);
    res.json({
      status: 'success',
      data: { order },
      message: 'order showed Successfully',
    });
  } catch (error) {
    next(error);
  }
};
export const deleteOne = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const order = await OrderModel.deleteOne(
      req.params.id as unknown as string
    );
    res.json({
      status: 'success',
      data: order,
      message: 'order deleted successfully',
    });
  } catch (err) {
    next(err);
  }
};
