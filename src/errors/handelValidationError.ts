import mongoose from 'mongoose';
import { IGenericErrorMessage } from '../interfaces/error-interface';
import { IGenericErrorResponse } from '../interfaces/common-interface';

export const handelValidationError = (
  err: mongoose.Error.ValidationError
): IGenericErrorResponse => {
  const errors: IGenericErrorMessage[] = Object.values(err.errors).map(
    (ele: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: ele?.path as string,
        message: ele?.message as string,
      };
    }
  );

  const statusCode = 400;

  return {
    statusCode,
    message: 'Validation Error',
    errorMessages: errors,
  };
};
