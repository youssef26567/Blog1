import { Request, Response, NextFunction } from 'express';
import catagorymodel from '../models/catagory.model';
const catagory = new catagorymodel();
export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const catagorys = await catagory.create(req.body);
    res.json({
      status: 'success',
      data: { ...catagorys },
      message: 'User Created Successfully',
    });
  } catch (error) {
    next(error);
  }
};

export const getMany = async (
  _: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const catagorys = await catagory.GetMany();
    res.json({
      status: 'success',
      data: catagorys,
      message: 'User retrieved successfully',
    });
  } catch (err) {
    next(err);
  }
};
