import { NextFunction, Request, Response } from "express";
import User from "../models/user.model";
import { errorWrapper} from "../middleware/errorWrapper";


const getAllUsers = errorWrapper(async (req: Request, res: Response) => {
  const users = await User.findAll();
  res.status(200).json(users);
})

const getUserById = errorWrapper(async (req: Request, res: Response) => {

  const user = await User.findByPk(req.params.id, { rejectOnEmpty: true });

  res.status(200).json(user);
})


const getUserByName = async(req: Request, res: Response, next: NextFunction) => {

}

const updateUser = async (req: Request, res: Response, next: NextFunction) => {
  
}

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  
}

const createUser = errorWrapper(async (req: Request, res: Response) => {
  const user = req.body
  const response = await User.create(user);
  res.status(201).json(response);
})

export { 
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  createUser
}