import { useState } from "react";
import Chip from "../../components/Chip/Chip";
import {MdAccessTime} from "react-icons/md";
import Modal from "../Modal";
import timePeriods from "./timePeriods";
import style from "./ChipTimePeriod.module.css";
function ChipTimePeriod(){
    const [show,setShow] = useState(false);
    const [selectedPeriod,setSelectedPeriod] = useState('2:00 - 3:00 pm')

    const toggleShow = ()=>{
        setShow(show=>!show);
    }
    const selectPeriod = (period)=>{
       setSelectedPeriod(period);
       setShow(false);
    }
    return (
        <>
        <Chip icon={MdAccessTime} text={selectedPeriod} onClick={toggleShow}/>      
            <Modal show={show} title={<Title/>}>
                {
                    timePeriods.map(time=>(
                        <div 
                            className={style.period} 
                            key={time.id} 
                            onClick={()=>{selectPeriod(time.text)}}
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