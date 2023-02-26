import express, { Router } from 'express';
import logger from '../logger';
import User from '../models/user.model';

const router: Router = express.Router();

router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: 'Internal Server Error'})
  }
});

export default router;