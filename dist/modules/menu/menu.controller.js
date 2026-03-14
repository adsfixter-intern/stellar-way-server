"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuController = void 0;
const menu_service_1 = require("./menu.service");
const createMenu = async (req, res) => {
    try {
        const result = await menu_service_1.MenuService.createMenuIntoDB(req.body);
        res.status(200).json({ success: true, message: 'Menu created successfully', data: result });
    }
    catch (error) {
        res.status(500).json({ success: false, message: 'Could not create menu', error });
    }
};
const getAllMenus = async (req, res) => {
    try {
        const result = await menu_service_1.MenuService.getAllMenusFromDB();
        res.status(200).json({ success: true, data: result });
    }
    catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch menus', error });
    }
};
const getSingleMenu = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await menu_service_1.MenuService.getSingleMenuFromDB(id);
        if (!result) {
            return res.status(404).json({ success: false, message: 'Menu not found' });
        }
        res.status(200).json({ success: true, data: result });
    }
    catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch menu details', error });
    }
};
const updateMenu = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await menu_service_1.MenuService.updateMenuInDB(id, req.body);
        res.status(200).json({ success: true, message: 'Menu updated successfully', data: result });
    }
    catch (error) {
        res.status(500).json({ success: false, message: 'Update failed', error });
    }
};
const deleteMenu = async (req, res) => {
    try {
        const { id } = req.params;
        await menu_service_1.MenuService.deleteMenuFromDB(id);
        res.status(200).json({ success: true, message: 'Menu deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ success: false, message: 'Delete failed', error });
    }
};
exports.MenuController = {
    createMenu,
    getAllMenus,
    getSingleMenu,
    updateMenu,
    deleteMenu,
};
