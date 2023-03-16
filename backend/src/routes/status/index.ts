import { Router } from "express";

import { status } from "../../contollers/status";

const router = Router();

router.get("", status);

export default router;
