import { Router } from "express";
import { MenuRoutes } from "../../modules/menu/menu.route";
import { NotificationRoutes } from "../../modules/notification/notification.route";

const router = Router();

const moduleRoutes = [
  { path: "/menu", route: MenuRoutes },
  { path: "/notifications",route: NotificationRoutes },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
