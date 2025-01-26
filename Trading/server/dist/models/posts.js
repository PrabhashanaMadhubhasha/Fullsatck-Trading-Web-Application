"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const postSchema = new mongoose_1.default.Schema({
    intOrderID: {
        type: Number,
        required: true
    },
    orderID: {
        type: String,
        required: true
    },
    symbol: {
        type: String,
        required: true
    },
    topic: {
        type: String,
        required: true
    },
    description: {
        type: Number,
        required: true
    },
    postCategory: {
        type: Number,
        required: true
    },
    side: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
});
const Posts = mongoose_1.default.model('Posts', postSchema);
exports.default = Posts;
