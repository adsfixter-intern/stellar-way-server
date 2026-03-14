import { Router } from 'express';
import { MenuRoutes } from '../../modules/menu/menu.route';
import { UserRoutes } from '../../modules/user/user.route';

const router = Router();

const moduleRoutes = [
  { path: '/menu', route: MenuRoutes },
  { path: '/auth', route: UserRoutes },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;