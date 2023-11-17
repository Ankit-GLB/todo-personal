import {List,ListItem,ListItemButton,ListItemText, Checkbox, Button} from "@mui/material"
import {useRecoilValue} from "recoil"
import { todosArray } from "../App" 

export default function TodosCard () {
    const todos = useRecoilValue(todosArray)
    return (
        <List>{
            todos.map((item) =>{
                if(item !== ""){
                    return (
                        <ListItem
                            secondaryAction={
                            <Checkbox edge="end"/>
                            }
                        >
                            <ListItemButton> 
                            <ListItemText primary={item} />
                            </ListItemButton>
                            <Button variant="contained" style={{marginRight : "1.5rem"}}>Delete</Button>
                        </ListItem>
                    )
                }
            }
        )}
        </List>
    );
}