import Chip from "../../components/Chip/Chip";
import SearchBar from "../../components/SearchBar";
import Weekend from "../../components/Weekend";
import {MdAccessTime} from "react-icons/md";
import "./Home.module.css";
function Home(){
    return (
        <div>
            <SearchBar/>
            <Weekend/>
            <Chip icon={MdAccessTime} text={'2:00 - 3:00 pm'}/>
        </div>
    )
}
export default Home