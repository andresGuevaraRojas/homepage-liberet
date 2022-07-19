import { NavLink } from "react-router-dom"
import style from "./BottomTabBar.module.css";
import { AiOutlineShoppingCart,AiOutlineAppstore } from "react-icons/ai"
import {BiUserCircle} from "react-icons/bi"
function BottomTabBar() {
    return (
        <nav className={style.container}>
            <ul className={style.menu}>
                <li className={style.option}>
                    <NavLink to={'shoppingcart'} className={({isActive})=>isActive?style.navLinkActive:style.navLink}>
                        <AiOutlineShoppingCart className={style.icon} />
                    </NavLink>
                </li>
                <li className={style.option}>
                    <NavLink to={'/'} className={({isActive})=>isActive?style.navLinkActive:style.navLink}>
                        <AiOutlineAppstore className={style.icon}/>
                    </NavLink>
                </li>
                <li className={style.option}>
                    <NavLink to={'profile'} className={({isActive})=>isActive?style.navLinkActive:style.navLink}>
                        <BiUserCircle className={style.icon}/>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default BottomTabBar;