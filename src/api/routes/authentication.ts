import { Router } from "express";

import { registration } from '../controllers';

const router = Router();

router.post('/register', registration);

export default router;