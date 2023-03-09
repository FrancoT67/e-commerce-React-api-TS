import { Request, Response } from "express";

export function posts(_req: Request, res: Response) {
    return res.json({
        user:'username',
        lastname:'lastname',
        date:12,
    })
}
