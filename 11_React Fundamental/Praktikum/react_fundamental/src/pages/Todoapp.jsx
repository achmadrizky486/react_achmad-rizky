import Header from "./components/Header"
import Box from "./components/Box"

export default function Todoapp ({users}){
    return  (
    <> 
    
    <Header text="To Do App"/> 
    {users.map((user)=> <Box user={user}/>)}
    </> 
    );
}