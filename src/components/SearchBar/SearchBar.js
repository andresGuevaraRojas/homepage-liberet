import style from "./SearchBar.module.css";
import {AiFillEnvironment} from "react-icons/ai";
import {BsFilter} from "react-icons/bs"
function SearchBar(){
    const handleClick = ()=>{
        window.alert("Location!!");
    }
    return (
        <div className={style.container} onClick={handleClick}>
            <AiFillEnvironment className={`${style.icon} ${style.location}`}/>
            <input className={style.input} placeholder="Select location..."/>
            <BsFilter className={`${style.icon}`}/>
        </div>
    )
}
export default SearchBar;
