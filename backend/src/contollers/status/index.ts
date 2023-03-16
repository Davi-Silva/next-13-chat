import { Request, Response } from "express";

export const status = async (_req: Request, res: Response) => {
  try {
    return res.status(200).send({
      ok: true,
    });
  } catch (err) {
    return res.status(500).send({
      ok: false,
    });
  }
};
