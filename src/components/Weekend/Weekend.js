import WeekendDays from "./weekendDays";
import style from "./Weekend.module.css";
import { useState } from "react";

function Weekend() {
    const [selectedDay,setSelectedDay] = useState("04");
    return (
        <div className={style.container}>
            {
                WeekendDays.map(day => (
                    <div className={style.item} key={day.number}>
                        <span className={style.dayName}>{day.name}</span>
                        <span 
                            className={selectedDay == day.number?`${style.dayNumber} ${style.dayNumberSelected}`:style.dayNumber}
                            onClick={()=>{setSelectedDay(day.number)}}
                        >
                            {day.number}
                        </span>
                    </div>
                ))
            }
        </div>
    )
}
export default Weekend;