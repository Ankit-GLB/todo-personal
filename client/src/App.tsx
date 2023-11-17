import { Card, Typography } from "@mui/material"
import TodosCard from "./components/TodosCard"
import InputTodo from "./components/InputTodo"
import {useSetRecoilState,atom} from 'recoil'
import { useEffect } from "react"
import { BASE_URL } from "./components/config"

export function todoCustomHook () {
  const setTodos = useSetRecoilState(todosArray);

  useEffect( () => {
      const fetchedData = async () => {
          const response = await fetch(BASE_URL + "/todos",{
              method : "GET"
          });
          const data = await response.json();
          setTodos(data);
      }
      fetchedData();
  }, [])
}

function App() {
  todoCustomHook();
  return (
    <div style={{
      display : "flex",
      alignItems : "center",
      justifyContent : "center"
    }}>
      <Card variant="outlined" style={{
        display : "flex",
        flexDirection : "column",
        alignItems : "center",
        minWidth : "10rem",
        minHeight : "10rem",
        padding : "2rem"
      }}>
        <Typography variant="h4"> Todo Items </Typography>
        <InputTodo/>
        <TodosCard/>
      </Card>
    </div>
  )
}



// atoms
export const todosArray = atom<string[]>({
    key : "todosArray",
    default : [] // the default value is an empty todos array
});

export default App
