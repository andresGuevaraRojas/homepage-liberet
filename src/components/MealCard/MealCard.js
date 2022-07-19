import style from "./MealCard.module.css";
import {MdAccessTime} from "react-icons/md";
function MealCard({counter = 0,area,name,image,price}){
    return(
        <div className={style.container}>
            <div className={style.content} style={{background:`url(${image})`}}>
                <span>{counter}</span>
                <div>
                    <span>{area}</span>
                    <span>{name}</span>                    
                </div>
            </div>
            <div className={style.footer}>
                <MdAccessTime/>
                <span>{price}</span>
            </div>
        </div>
    )
}
export default MealCard