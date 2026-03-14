"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Menu = exports.Category = void 0;
const mongoose_1 = require("mongoose");
const categorySchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    sortOrder: { type: Number, default: 0 }
});
exports.Category = (0, mongoose_1.model)('Category', categorySchema);
const menuSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    stock: { type: Number, default: 0 },
    chefId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Chef' },
    categoryId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Category' },
    sortOrder: { type: Number, default: 0 },
    status: { type: String, enum: ['active', 'inactive'], default: 'active' },
    reviews: [{
            rating: Number,
            comment: String,
            userId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' }
        }]
}, { timestamps: true });
exports.Menu = (0, mongoose_1.model)('Menu', menuSchema);
