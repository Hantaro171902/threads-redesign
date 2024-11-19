import express from "express";

const router = express();

router.get("signup", (req, res) => {
  res.json({
    data: "You hit the signup endpoint",
  });
});

export default router;
