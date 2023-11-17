"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todoModel_1 = require("./models/todoModel");
const app = (0, express_1.default)();
app.use(express_1.default.json());
// const todoArray : string[] = [];
app.get("/", (req, res) => {
    res.json({
        msg: "the serve is on fire!!"
    });
});
app.get("/todos", (req, res) => {
    try {
        // res.json({ array : todoArray })
        res.json(todoModel_1.todoArray);
    }
    catch (e) {
        res.json({ msg: "some error found" });
    }
});
app.post("/todos", (req, res) => {
    const input = req.body;
    console.log(input);
    const newdata = new todoModel_1.todoArray(input);
    newdata.save();
    res.json(input);
});
// temp key
app.use("/*", (req, res) => {
    res.json({
        msg: "server goind right"
    });
});
app.listen(3000, () => {
    console.log(`serve is running on port 3000`);
});
// here put your mongoose connect part
