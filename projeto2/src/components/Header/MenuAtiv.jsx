import styles from './MenuAtiv.module.css';
import { Link, NavLink } from 'react-router-dom';


function MenuAtiv () {
    return(
            <>

<nav className={styles.menuNavegacao}>
            <ul className={styles.listas}>
                <li>
                    <NavLink to="/" className={({ isActive }) => isActive ? styles.menuAtivo : styles.menuNaoAtivo}> Home </NavLink>
                </li>
                <li>
                   <NavLink to="/ProductListingPage" className={({ isActive }) => isActive ? styles.menuAtivo : styles.menuNaoAtivo}> Produtos </NavLink>
                </li>
                <li>
                   <NavLink to="/ProductViewPage" className={({ isActive }) => isActive ? styles.menuAtivo : styles.menuNaoAtivo}> Categorias </NavLink>
                </li>
                <li>
                   <NavLink to="/MyOrders" className={({ isActive }) => isActive ? styles.menuAtivo : styles.menuNaoAtivo}> Meus Pedidos </NavLink>
                </li>
            </ul>
        </nav> 

            </>
    )
}

export default MenuAtiv;