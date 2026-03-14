"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuService = void 0;
const menu_model_1 = require("./menu.model");
const createMenuIntoDB = async (payload) => {
    const result = await menu_model_1.Menu.create(payload);
    return result;
};
const getAllMenusFromDB = async () => {
    const result = await menu_model_1.Menu.find().populate('chefId').populate('categoryId');
    return result;
};
const getSingleMenuFromDB = async (id) => {
    const result = await menu_model_1.Menu.findById(id).populate('chefId').populate('categoryId');
    return result;
};
const updateMenuInDB = async (id, payload) => {
    const result = await menu_model_1.Menu.findByIdAndUpdate(id, payload, { new: true });
    return result;
};
const deleteMenuFromDB = async (id) => {
    const result = await menu_model_1.Menu.findByIdAndDelete(id);
    return result;
};
exports.MenuService = {
    createMenuIntoDB,
    getAllMenusFromDB,
    getSingleMenuFromDB,
    updateMenuInDB,
    deleteMenuFromDB,
};
