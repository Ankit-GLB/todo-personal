import { Button } from "@mui/material";

export default function Header () {
    return (
        <div style={{
            display : "flex",
            alignItems : "center", 
            justifyContent : "space-between"
        }}>
            <p>beta app - 1.0</p>
            <div>
                <Button variant="contained">Signup</Button>
                <Button variant="contained" style={{marginLeft : "1rem"}}>Login</Button>                
            </div>
        </div>
    )
}