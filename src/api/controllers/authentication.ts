import { Request, Response } from 'express';
import { isEmail, isValidPassword } from '../util/validators';

export async function registration(req: Request, res: Response): Promise<void> {
  const { email, password, name } = req.body;

  if (email.length <= 0 || !isEmail(email)) {
    res.status(500);
  }

  if (password.length <= 0 || !isValidPassword(password)) {
    res.status(500);
  }

  if (name.length <= 0) {
    res.status(500);
  }

  try {
    res.status(200).send('Ok');
  } catch {
    res.status(500);
  }
}
