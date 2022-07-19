import style from "./ChipServices.module.css";
import {MdRestaurant} from "react-icons/md";
import Chip from "../Chip/Chip";
import Modal from "../Modal";
import { useState } from "react";
function ChipServices({services = [],selectedService,onSelectService}) {
    const [show,setShow] = useState(false);    
    const toggleShow = ()=>{
        setShow(show=>!show);
    }   
    return (
        <>
            <Chip icon={MdRestaurant} text={selectedService} onClick={toggleShow} />
            <Modal show={show} title={<Title />}>
                {
                    services.map(service => (
                        <div
                            className={style.service}
                            key={service.id}
                            onClick={() => {onSelectService(service)}}
                        >
                            {service.text}
                        </div>
                    ))
                }
            </Modal>
        </>
    )
}
const Title = ()=>(
    <div className={style.titleContainer}>
        <MdRestaurant className={style.titleIcon}/>
        <span className={style.titleText}>Elige una categoria</span>
    </div>
)
export default ChipServices