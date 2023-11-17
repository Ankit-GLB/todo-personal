import { TextField, Button } from "@mui/material"
import {useRecoilState} from "recoil"
import {useState } from "react"
import { todosArray } from "../App"
import { BASE_URL } from "./config"

export default function InputTodo () {

    const [todos,setTodos] = useRecoilState(todosArray);
    const [newTodo, setnewTodo] = useState('');

    const handleAddBtn = async () => {
        const response = await fetch(BASE_URL + "/todos",{
            method : "POST",
            headers : {
                "Content-type" : "application/json",
            },
            body : JSON.stringify({title : newTodo})
        });
        const newTodoData = await response.json();
        setTodos([...todos,newTodoData]);
        // console.log(newTodoData + " + " + typeof newTodoData)
        console.log(todos);
        // setnewTodo('');
    }

    const handleKeyDown = (event : React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key == "Enter") handleAddBtn();
    }

    return (
        <div style={{
            display : "flex",
            alignItems : "center",
            justifyContent : "flex-end",
            marginBottom : "3rem"
          }}>
            <TextField 
                variant="outlined" 
                label="todo item" 
                style={{width : "35rem", marginRight : "1rem"}}
                onChange= {(e) => setnewTodo(e.target.value)}
                onKeyDown={handleKeyDown}
                />
            <Button 
                variant="outlined" 
                style={{width : "6rem", height : "3.3rem"}}
                onClick={handleAddBtn}
                >Add</Button>
        </div>
    )
}