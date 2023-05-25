import express from 'express';
import { testEnvironmentVariable } from '../setting';

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => res.status(200).json({ message: testEnvironmentVariable }));

export default indexRouter;
