import { useState } from "react";
import Chip from "../../components/Chip/Chip";
import {MdAccessTime} from "react-icons/md";
import Modal from "../Modal";
import timePeriods from "./timePeriods";
import style from "./ChipTimePeriod.module.css";
function ChipTimePeriod({onSelectPeriod,period}){
    const [show,setShow] = useState(false);

    const toggleShow = ()=>{
        setShow(show=>!show);
    }
    const handleSelectPeriod = (period)=>{      
       onSelectPeriod(period)
       setShow(false);
    }
    return (
        <>
        <Chip icon={MdAccessTime} text={period} onClick={toggleShow}/>      
            <Modal show={show} title={<Title/>}>
                {
                    timePeriods.map(time=>(
                        <div 
                            className={style.period} 
                            key={time.id} 
                            onClick={()=>{handleSelectPeriod(time.text)}}
                        >
                            {time.text}
                        </div>                        
                    ))
                }
            </Modal>
        </>
    )
}
const Title = ()=>(
    <div className={style.titleContainer}>
        <MdAccessTime className={style.titleIcon}/>
        <span className={style.titleText}>Elige un horario de entrega</span>
    </div>
)
export default ChipTimePeriod;