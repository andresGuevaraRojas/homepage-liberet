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
    static async getMealDetail(idMeal){
        const detailFetch = await fetch(`${this.baseUrl}/lookup.php?i=${idMeal}`);
        const detailJson = await detailFetch.json();

        const firstDetail = detailJson.meals[0];
     
        const strTags = firstDetail.strTags;
        let tag = 'Desconocido';
        if(strTags!=null){
            const tags = strTags.split(',');
            tag = tags[0];
        }

        const detail = {
            area:firstDetail.strArea,
            tag:tag
        }

        return detail;        
    }
    static async getCategories(){
        const categoriesFetch = await fetch(`${this.baseUrl}/categories.php`);
        const categoriesResult = await categoriesFetch.json();    

        const categories = categoriesResult.categories.map(category=>(
            {
                id:category.idCategory,
                text:category.strCategory,              
            }
        ))        
        return categories;
    }
}

export default MealService;