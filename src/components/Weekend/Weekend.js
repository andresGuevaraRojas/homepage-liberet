import WeekendDays from "./weekendDays";
import style from "./Weekend.module.css";

function Weekend({day,onSelectDay}) {    
    return (        
        <div className={style.container}>
            {
                WeekendDays.map(dayItem => (
                    <div className={style.item} key={dayItem.number}>
                        <span className={style.dayName}>{dayItem.name}</span>
                        <span 
                            className={day.number == dayItem.number?`${style.dayNumber} ${style.dayNumberSelected}`:style.dayNumber}
                            onClick={()=>{onSelectDay(dayItem)}}
                        >
                            {dayItem.number}
                        </span>
                    </div>
                ))
            }
        </div>
    )
}
export default Weekend;