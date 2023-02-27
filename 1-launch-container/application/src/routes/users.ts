import express, { Router } from 'express';
import { getAllUsers, getUserById, createUser } from '../controllers/user.controller'

const router: Router = express.Router();


router.get('/users', getAllUsers);

router.get('/user/:id', getUserById);

router.post('/user', createUser);

// router.put('/:id', updateUser);

// router.delete('/:id', deleteUser);

export default router;