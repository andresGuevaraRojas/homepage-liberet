class MealService{
    static baseUrl = 'https://www.themealdb.com/api/json/v1/1';
    static async getMealByCategory(category){
        const mealsFetch = await fetch(`${this.baseUrl}/filter.php?c=${category}`);
        const mealsResul = await mealsFetch.json();    

        const meals = mealsResul.meals.map(meal=>(
            {
                id:meal.idMeal,
                name:meal.strMeal,
                price:Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN'}).format(meal.idMeal),            
                image:meal.strMealThumb
            }
        ))        
        return meals;
    }    
}

export default MealService;