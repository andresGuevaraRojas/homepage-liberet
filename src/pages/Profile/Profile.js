import { useAppContext } from "../../providers/AppProvider";
import style from "./Profile.module.css";
function Profile (){
    const {day,period,category} = useAppContext();
    return (
        <div className={style.container}>
            <div className={style.summary}>
                <label className={style.item}>
                    {`${day.name} ${day.number}`}
                </label>
                <label className={style.item}>
                    {period}
                </label>
                <label className={style.item}>
                    {category}
                </label>
            </div>
        </div>
    )
}

export default Profile;