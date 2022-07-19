import style from "./MealCard.module.css";
import {MdAccessTime} from "react-icons/md";
function MealCard({counter = 0,area='DF',name,image,price,className}){
    return(
        <div className={`${style.container} ${className}`}>
            <div className={style.contentWraper} style={{background:`url(${image})`,backgroundSize:'cover'}}>
                <div className={style.content}>
                    <span className={style.counter}>Quedan {counter}</span>
                    <div className={style.info}>
                        <span className={style.area}>{area}</span>
                        <span className={style.name}>{name}</span>                    
                    </div>
                </div>                
            </div>
            <div className={style.footer}>
                <MdAccessTime className={style.footerIcon}/>
                <span className={style.price}>{price}</span>
            </div>
        </div>
    )
}
export default MealCard