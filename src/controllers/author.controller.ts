import { Request, Response, NextFunction } from 'express';
import authermodel from '../models/author.model';
const AutherModel = new authermodel();
export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const author = await AutherModel.create(req.body);
    res.json({
      status: 'success',
      data: { ...author },
      message: 'author Created Successfully',
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
    const author = await AutherModel.GetAll();
    res.json({
      status: 'success',
      data: { author },
      message: 'authors showed Successfully',
    });
  } catch (error) {
    next(error);
  }
};
