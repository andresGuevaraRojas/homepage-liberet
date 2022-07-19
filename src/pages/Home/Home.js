import ChipMealCounter from "../../components/ChipMealCounter";
import ChipServices from "../../components/ChipServices";
import ChipTimePeriod from "../../components/ChipTimePeriod";
import SearchBar from "../../components/SearchBar";
import Weekend from "../../components/Weekend";
import style from "./Home.module.css";
function Home(){
    return (
        <div className={style.container}>
            <SearchBar/>
            <Weekend/>        
            <div className={style.chips}>
                <ChipTimePeriod/>              
                <ChipServices selectedService={'Beef'}/>
                <ChipMealCounter/>
            </div>            
        </div>
    )
}
export default Home