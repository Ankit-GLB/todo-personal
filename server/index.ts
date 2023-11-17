import express from "express"
import { Request, Response } from "express";
import mongoose from "mongoose";
import {todoArray} from "./models/todoModel"
const app = express();

app.use(express.json())

type bodyInputType = {
    todoId : number
    title : string
}

// const todoArray : string[] = [];

app.get("/", (req : Request,res : Response) => {
    res.json({
        msg : "the serve is on fire!!"
    })
})

app.get("/todos", (req : Request, res : Response) => {
    try{
        // res.json({ array : todoArray })
        res.json(todoArray);
    }
    catch(e){
        res.json({msg : "some error found"});
    }
})

app.post("/todos", (req : Request, res : Response) =>{
    const input : bodyInputType = req.body;
    console.log(input)
    const newdata = new todoArray(input);
    newdata.save();
    res.json(input);
})

// temp key
app.use("/*", (req : Request, res : Response) => {
    res.json({
        msg : "server goind right"
    })
})


app.listen(3000, () =>{
    console.log(`serve is running on port 3000`);
})

// here put your mongoose connect part