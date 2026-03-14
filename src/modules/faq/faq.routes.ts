import { Router } from 'express';
import { FaqControllers } from './faq.controller';

const router = Router();

router.post('/create-faq', FaqControllers.createFaq);
// router.get('/', FaqControllers.getAllFaqs);

export const FaqRoutes = router;