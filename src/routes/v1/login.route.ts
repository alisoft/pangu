import express, { Request, Response } from "express";
import httpStatus from "http-status";

const router = express.Router();

router.post("/account", async (req: Request, res: Response) => {
  res.status(httpStatus.OK).send({
    type: "account",
    token:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.PObw1E6dwD2Mo9vLQUO8CQxzITNXx4ABu7mS2zWLeJk",
    success: true,
  });
});

export default router;
