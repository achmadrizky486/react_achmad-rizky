
import Styles from './Todos.module.css' 
import { Link } from 'react-router-dom'

export default function Sidebar (){
    return ( 
        <> 
        <div className={Styles.Sidebar}>
            <ul className={Styles.list}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About_app">About App</Link></li>
                <li><Link to="/About_author">About Author</Link></li>
            </ul>
        </div>
        </>
        )
}