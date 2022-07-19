import style from "./MealCard.module.css";
import {MdAccessTime} from "react-icons/md";
import { useEffect, useState } from "react";
import MealService from "../../services/MealService";
function MealCard({id,name,image,price,className}){
    const [detail,setDetail] = useState({
        area:null,
        tag:null
    })
    useEffect(()=>{
        const fetData = async()=>{
            const detail = await MealService.getMealDetail(id);
            setDetail(detail)
        }
        fetData();
    },[])
    return(
        <div className={`${style.container} ${className}`}>
            <div className={style.contentWraper} style={{background:`url(${image})`,backgroundSize:'cover'}}>
                <div className={style.content}>
                    <span className={style.counter}>{detail.tag}</span>
                    <div className={style.info}>
                        <span className={style.area}>{detail.area&&detail.area}</span>
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