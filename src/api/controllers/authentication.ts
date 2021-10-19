import { Request, Response } from "express";

export async function registration(req: Request, res: Response): Promise<void> {
    console.log(req.body);
    res.send('Ok');
};
