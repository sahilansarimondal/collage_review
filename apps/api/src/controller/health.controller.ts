import { NextFunction, Request, Response } from "express";

// Health check
export const healthCheck = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    res.status(200).json({ message: "OK" });
  } catch (error) {
    next(error);
  }
};
