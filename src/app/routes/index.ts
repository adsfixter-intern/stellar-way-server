
import { NotificationRoutes } from "../../modules/notification/notification.route";
import { Router } from 'express';
import { MenuRoutes } from '../../modules/menu/menu.route';
import { MessageRoutes } from '../../modules/message/message.route';
import { CategoryRoutes } from '../../modules/category/category.route';
import { uploadRoutes } from '../../modules/upload/upload.route';
import { FaqRoutes } from '../../modules/faq/faq.routes';
import path from 'node:path';
import { FeedbackRoutes } from '../../modules/feedback/feedback.route';
import { EventRoutes } from "../../modules/event/event.route";

const router = Router();

const moduleRoutes = [
  { path: "/menu", route: MenuRoutes },
  { path: "/notifications",route: NotificationRoutes },
  { 
    path: '/menu', 
    route: MenuRoutes 
  },
  {
    path: "/faq", 
    route: FaqRoutes 
  },
  {
    path: "/feedback",
    route: FeedbackRoutes
  },
  {
    path: "/events",
    route: EventRoutes
  },
  {path:'/messages', route:MessageRoutes},
  {path: '/categories', route: CategoryRoutes},
  {path:'/uploads', route: uploadRoutes}
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;


