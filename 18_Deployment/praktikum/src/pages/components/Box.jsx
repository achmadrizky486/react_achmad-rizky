import Styles from "./Todos.module.css"

export default function Box({ user }) {
        console.log(user.completed)
        return (
                <>

                        <div className={Styles.border}>
                                <p >{user.title}</p>
                                {/* <p {user.completed ? styles = {{textDecoration:"line-through"}} : ""}>{user.title}</p> */}

                </div>
                </>

                //Maaf kak, gak tau ternary nya taruh mana

        )
}