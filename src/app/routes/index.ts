import { Router } from 'express';
import { MenuRoutes } from '../../modules/menu/menu.route';
import { BookingRoutes } from '../../modules/booking/booking.route';
import { ChefRoutes } from '../../modules/chef/chef.route';

const router = Router();

const moduleRoutes = [
  { path: '/menu', route: MenuRoutes },
  { path: '/bookings', route: BookingRoutes },
  { path: '/chefs', route: ChefRoutes },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;