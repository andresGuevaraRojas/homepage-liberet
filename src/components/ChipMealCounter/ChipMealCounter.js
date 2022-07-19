import {MdExposurePlus1} from "react-icons/md";
import Chip from "../Chip/Chip";
function ChipMealCounter({}) {    
    return (
        <>
            <Chip icon={MdExposurePlus1} text={'Platillos'} onClick={()=>{alert('Platillos')}}/>            
        </>
    )
}
export default ChipMealCounter