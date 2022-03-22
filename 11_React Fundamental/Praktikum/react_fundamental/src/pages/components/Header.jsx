import Styles from "./Todos.module.css"

export default function Header ({text}){
    return ( 
        <div className={Styles.navbar}>
        <h1 >{text}</h1>
        </div>
        )
}