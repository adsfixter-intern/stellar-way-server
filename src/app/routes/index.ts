import { Router } from 'express';
import { MenuRoutes } from '../../modules/menu/menu.route';
import { FaqRoutes } from '../../modules/faq/faq.routes';

const router = Router();

const moduleRoutes = [
  { 
    path: '/menu', 
    route: MenuRoutes 
  },
  {
    path: "/faq", 
    route: FaqRoutes 
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;