

const foodImg = document.getElementById("food-img");
const foodName = document.getElementById("food-name");
const foodCategory = document.getElementById("food-category");
const foodArea = document.getElementById("food-area");
const btn = document.getElementById("btn");

async function getFood() {
  try {
    // API que retorna comidas aleatórias
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php"); 
    const data = await response.json();
    const meal = data.meals[0];

    foodImg.src = meal.strMealThumb;
    foodName.textContent = meal.strMeal;
    foodCategory.textContent = `Categoria: ${meal.strCategory}`;
    foodArea.textContent = `Origem: ${meal.strArea}`;
  } catch (error) {
    foodName.textContent = "Erro ao carregar comida 😢";
    foodImg.src = "";
    foodCategory.textContent = "";
    foodArea.textContent = "";
  }
}

btn.addEventListener("click", getFood);
