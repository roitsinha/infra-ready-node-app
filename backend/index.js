import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Tell Express to trust reverse proxy .
app.set('trust proxy', true);

app.use(helmet());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

app.use(express.json());

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Infra Ready Node App</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>
          body {
            font-family: Arial, sans-serif;
            max-width: 700px;
            margin: 40px auto;
            padding: 0 20px;
            background: #f9f9f9;
            color: #333;
          }
          h1 {
            color: #007acc;
          }
          button {
            background-color: #007acc;
            color: white;
            border: none;
            padding: 12px 24px;
            font-size: 16px;
            cursor: pointer;
            border-radius: 5px;
            transition: background-color 0.3s ease;
          }
          button:hover {
            background-color: #005fa3;
          }
          p {
            line-height: 1.6;
          }
          footer {
            margin-top: 50px;
            font-size: 0.9em;
            color: #666;
            border-top: 1px solid #ddd;
            padding-top: 10px;
          }
        </style>
      </head>
      <body>
        <h1>Welcome to Infra Ready Node App!</h1>
        <p>This is a simple Node.js application designed to showcase an infra-ready backend setup with API endpoints, database integration, and security best practices.</p>
        <p>The <strong>/api/users</strong> endpoint manages user data and is ready for integration with your frontend or API clients.</p>
        <button onclick="window.location.href='/api/users'">Go to Users API</button>
        <footer>
          Infra Ready Node App &mdash; A modern Node.js infrastructure starter project.
        </footer>
      </body>
    </html>
  `);
});

app.use('/api/users', userRoutes);

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`✅ Server running on port ${PORT}`);
  });
}

export default app;
