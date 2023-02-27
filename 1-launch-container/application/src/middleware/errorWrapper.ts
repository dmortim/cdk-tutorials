import { NextFunction, Request, Response, ErrorRequestHandler } from 'express';
import { ConnectionError, EmptyResultError, ValidationError } from 'sequelize';

export const errorWrapper = (fn: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

export const errorHandler: ErrorRequestHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
  
  if (error instanceof ValidationError) {
    res.status(400).send({ message: error });
  } 
  else if (error instanceof EmptyResultError) {
    res.status(404).send({ message: "Item not found" })
  }
  else if (error instanceof ConnectionError) {
    res.status(500).send({ message: error.message })
  }
  else {
    res.status(500).send({ message: 'Internal Server Error' })
  }
}