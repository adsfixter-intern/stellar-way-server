"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const menu_route_1 = require("../../modules/menu/menu.route");
const booking_route_1 = require("../../modules/booking/booking.route");
const chef_route_1 = require("../../modules/chef/chef.route");
const router = (0, express_1.Router)();
const moduleRoutes = [
    { path: '/menu', route: menu_route_1.MenuRoutes },
    { path: '/bookings', route: booking_route_1.BookingRoutes },
    { path: '/chefs', route: chef_route_1.ChefRoutes },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
