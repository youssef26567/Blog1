import { Request, Response, NextFunction } from 'express';
import blogmodel from '../models/book.model';
const BlogModel = new blogmodel();
export const Create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const blog = await BlogModel.create(req.body);
    res.json({
      status: 'success',
      data: { ...blog },
    });
  } catch (error) {
    next(error);
  }
};
export const GetMany = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const blog = await BlogModel.GetMany();
    res.json({
      status: 'success',
      data: blog,
      message: 'blogs founds Successfully',
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
    const blog = await BlogModel.GetOne(req.params.id as unknown as string);
    res.json({
      status: 'success',
      data: blog,
      message: 'blog found Successfully',
    });
  } catch (error) {
    next(error);
  }
};
export const DELETE = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const blog = await BlogModel.delete(req.params.id as unknown as string);
    res.json({
      status: 'success',
      data: blog,
      message: 'book deleted Successfully',
    });
  } catch (error) {
    next(error);
  }
};
// export const updateOne = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   try {
//     const blog = await BlogModel.UpdateOne(req.body);
//     res.json({
//       status: 'success',
//       data: blog,
//       message: 'blog updated successfully',
//     });
//   } catch (err) {
//     next(err);
//   }
// };
export default BlogModel;
