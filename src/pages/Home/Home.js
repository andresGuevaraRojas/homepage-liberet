import { useEffect, useState } from "react";
import ChipMealCounter from "../../components/ChipMealCounter";
import ChipServices from "../../components/ChipServices";
import ChipTimePeriod from "../../components/ChipTimePeriod";
import MealCard from "../../components/MealCard";
import SearchBar from "../../components/SearchBar";
import Weekend from "../../components/Weekend";
import MealService from "../../services/MealService";
import style from "./Home.module.css";
function Home() {

    const [category, setCategory] = useState('Beef');
    const [loading, setLoading] = useState(false)
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        const getData = async () => {
            setLoading(true)
            const meals = await MealService.getMealByCategory(category);
            setMeals(meals);
            setLoading(false)
        }
        getData();
    }, [category])
    return (
        <div className={style.container}>
            <SearchBar />
            <Weekend />
            <div className={style.content}>
                <div className={style.chips}>
                    <ChipTimePeriod />
                    <ChipServices selectedService={category} />
                    <ChipMealCounter />
                </div>

                <div className={style.meals}>
                    {
                        loading ? 'Cargando...' :
                            meals.map(meal =>
                                <MealCard {...meal} className={style.meal} />
                            )
                    }
                </div>
            </div>
        </div>
    )
}
export default Home