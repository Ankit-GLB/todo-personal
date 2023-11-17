"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
const todoArray = [];
app.get("/", (req, res) => {
    res.json({
        msg: "the serve is on fire!!"
    });
});
app.get("/todos", (req, res) => {
    try {
        // res.json({ array : todoArray })
        res.json(todoArray);
    }
    catch (e) {
        res.json({ msg: "some error found" });
    }
});
app.post("/todos", (req, res) => {
    const input = req.body;
    const todoData = input.title;
    console.log(todoData);
    todoArray.push(todoData);
    res.json(todoData);
});
app.listen(3000, () => {
    console.log(`serve is running on port 3000`);
});
