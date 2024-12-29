import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const port = 3000;
const app = express();

dotenv.config();
app.use(cors());

app.post("/api/session/new", async (_, res) => {
  const response = await fetch("https://api.avaturn.live/api/v1/sessions", {
    method: "POST",
    body: JSON.stringify({
      avatarId: "jane_20240829",
      extra: { background: "transparent" },
    }),
    headers: {
      Authorization: `Bearer ${process.env.AVATURN_LIVE_TOKEN}`,
      "Content-Type": "application/json",
    },
  });
  res.json(await response.json()).status(response.status);
});

app.listen(port, () => {
  console.info(`Service started on port ${port}`);
});
