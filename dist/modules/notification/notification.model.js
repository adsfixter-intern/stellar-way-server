"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notification = void 0;
const mongoose_1 = require("mongoose");
const notificationSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    message: { type: String, required: true },
    type: { type: String, enum: ['order', 'event', 'system'] },
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
    status: { type: String, enum: ['read', 'unread'], default: 'unread' }
}, { timestamps: true });
exports.Notification = (0, mongoose_1.model)('Notification', notificationSchema);
