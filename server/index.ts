import express from "express"
import { Request, Response } from "express";
const app = express();

app.use(express.json())

type bodyInputType = {
    title : string
}

const todoArray : string[] = [];

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
    const todoData : string = input.title;
    console.log(todoData)
    todoArray.push(todoData);
    res.json(todoData);
})

app.listen(3000, () =>{
    console.log(`serve is running on port 3000`);
})



//  mongodb+srv://ankitglbitm:e18pb2110005@todo-personal.pzicogv.mongodb.net/