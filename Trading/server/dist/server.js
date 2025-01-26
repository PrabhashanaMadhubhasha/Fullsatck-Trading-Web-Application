"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser")); // information will be arrived as a .json to the server, convert it into JS object format
const app = (0, express_1.default)();
const posts_1 = __importDefault(require("./routes/posts")); // import routes
app.use(body_parser_1.default.json()); // app middleware
app.use(posts_1.default); // route middleware
app.use((0, cors_1.default)());
const PORT = 8000;
// const DB_URL_TRADING: string = 'mongodb+srv://and:1234@cluster0.ts8avyn.mongodb.net/test?retryWrites=true&w=majority';
const DB_URL_TRADING = 'mongodb://localhost:27017/Trading';
// const DB_URL_LOGIN: string = 'mongodb+srv://and:1234@cluster0.ts8avyn.mongodb.net/employee?retryWrites=true&w=majority'
mongoose_1.default
    .connect(DB_URL_TRADING)
    .then(() => {
    console.log('DB Connected to TRADING');
})
    .catch((err) => console.log('DB Connection error', err));
// mongoose.connect(DB_URL_LOGIN)
// .then(()=>{
// console.log('DB Connected LOGIN');
// })
// .catch((err)=>console.log('DB Connection error',err));
app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
});
