
import Styles from './Todos.module.css' 
import { Link } from 'react-router-dom'

export default function Sidebar (){
    return ( 
        <> 
        <div className={Styles.Sidebar}>
            <ul className={Styles.list}>
                <li className={Styles.li}><Link to="/" className={Styles.link}>Home</Link></li>
                <li className={Styles.li}><Link to="/About_app" className={Styles.link}>About App</Link></li>
                <li className={Styles.li}><Link to="/About_author" className={Styles.link}>About Author</Link></li>
            </ul>
        </div>
        </>
        )
}