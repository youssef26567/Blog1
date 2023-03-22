import { Request, Response, NextFunction } from 'express';
import pruchasemodel from '../models/purchase.model';
const PurchaseModel = new pruchasemodel();
export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const purchase = await PurchaseModel.create(req.body);
    res.json({
      status: 'success',
      data: { ...purchase },
      message: 'purchase Created Successfully',
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
    const purchase = await PurchaseModel.getMany;
    res.json({
      status: 'success',
      data: { purchase },
      message: 'purchase showed Successfully',
    });
  } catch (error) {
    next(error);
  }
};
