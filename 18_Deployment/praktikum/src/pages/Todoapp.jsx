import Header from "./components/Header"
import Box from "./components/Box"

export default function Todoapp({ todo }) {
    return (
        <>
            <Header />
            {todo.map((iniTodoList) => <Box user={iniTodoList} />)}
            {/* <Header text="To Do App" />
            {users.map((user) => <Box user={user} />)} */}
            
        </>
        
    );
}