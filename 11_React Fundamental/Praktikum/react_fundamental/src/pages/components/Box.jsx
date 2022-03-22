import Styles from "./Todos.module.css"

export default function Box ({user}){

return (
        <>
        <div className={Styles.border }>
        <p>{user.title}</p>
        </div>
        </>
)
}