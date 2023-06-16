import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes/routes';
import httpStatus from 'http-status';

// import ApiError from './errors/ApiErrors'
const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', routes);

//global error handler
app.use(globalErrorHandler);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessage: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
  next();
});

export default app;
