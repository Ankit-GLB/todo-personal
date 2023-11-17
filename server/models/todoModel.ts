import mongoose, { mongo } from "mongoose";

const todoSchema = new mongoose.Schema({
    todoId : Number,
    title : String
})

export const todoArray = mongoose.model("todoArray",todoSchema);