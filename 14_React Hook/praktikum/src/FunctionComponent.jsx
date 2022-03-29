import React, {useState} from "react"; 

export default function FunctionComponent({Users}){
    const [count, setCount] = useState(Users); 
    let handleChange = (e)=>{
        setCount(e.target.value);
    }; 
    return (
        <> 

        <form >
        <input></input> 
        <button onClick={handleChange}>Submit</button>
        </form>  

        {count.map((user)=> <div>{user.title} <button onClick={handleChange}>Delete</button></div> )}  
                
           
            <h1>yhvfkch</h1>

        </>
    )
}