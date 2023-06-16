import express from 'express';
import { AcademicSemesterValidation } from './academicSemester.validaton';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterController } from './academicSemester.controler';

const router = express.Router();

router.post(
  '/create-semester',
  validateRequest(AcademicSemesterValidation.createAcademicSemesterZodSchema),
  AcademicSemesterController.createSemester
);
router.get('/', AcademicSemesterController.getAllSemester);

export const AcademicSemesterRoutes = router;
