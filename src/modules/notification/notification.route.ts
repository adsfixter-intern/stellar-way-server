import express from 'express';
import {
  createNotification,
  deleteNotification,
  getUserNotificationsByEmail,
  markAsRead,
} from './notification.controller';
const router = express.Router();
router.get('/:email', getUserNotificationsByEmail);
router.post('/', createNotification);
router.patch('/:id', markAsRead);
router.delete('/:id', deleteNotification);

export const NotificationRoutes = router;