import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

// Enable CORS for frontend requests
app.use(
  "/api/*",
  cors({
    origin: "*", // Adjust in production to frontend URL
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
    credentials: true,
  })
);

app.get("/api/hello", (c) => {
  return c.json({
    status: "success",
    message: "Hello from Cloudflare Workers (Hono)!",
    timestamp: new Date().toISOString(),
  });
});

export default app;
