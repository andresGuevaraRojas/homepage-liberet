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
    const [categories,setCategories] = useState([])

    const handleServiceSelect = (category)=>{
        setCategory(category)
    }
    useEffect(() => {
        const getData = async () => {
            setLoading(true)
            const meals = await MealService.getMealByCategory(category);
            const categories = await MealService.getCategories();
            setMeals(meals);
            setCategories(categories);
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
                    <ChipServices selectedService={category} services={categories} onSelectService={handleServiceSelect} />
                    <ChipMealCounter />
                </div>

                <div className={style.meals}>
                    {
                        loading ? 'Cargando...' :
                            meals.map(meal =>
                                <MealCard {...meal} className={style.meal} key={meal.id}/>
                            )
                    }
                </div>
            </div>
        </div>
    )
}
export default Home