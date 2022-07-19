import style from "./Chip.module.css";

function Chip({icon:Icon,text,onClick}){
    return (
        <div className={style.container} onClick={onClick}>
            <Icon className={style.icon}/>        
            <span className={style.text}>{text}</span>
        </div>
    )
}
export default Chip;