import { Request, Response } from "express";

export function home(_req: Request ,res: Response) {
    return res.json('texto desde controllador ');
};