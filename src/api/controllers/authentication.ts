import { json, Request, Response } from 'express';
import { isEmail, isValidPassword } from '../util/validators';

export async function registration(req: Request, res: Response): Promise<void> {
  const { email, password, name } = req.body;

  if (email.length <= 0 || !isEmail(email)) {
    res.status(400).json({
      error: 'Please enter a valid email.',
    });
  }

  if (password.length <= 0 || !isValidPassword(password)) {
    res.status(400).json({
      error: 'Please enter a valid password.',
    });
  }

  if (name.length <= 0) {
    res.status(400).json({
      error: 'You must enter a name.',
    });
  }

  try {
    res.status(200).json({
      message: 'User successfully created.',
      payload: {},
    });
  } catch {
    res.status(500).json({
      error: 'There was an error processing your request.',
    });
  }
}
