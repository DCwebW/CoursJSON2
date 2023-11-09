window.onload = function(){
    const APIrecettes = "635315347b7b41a08d17c945fc419c01";

    const recetteListe = document.getElementById("ListedeRecette");
    function displayRecettes(recipes){
        recetteListe.innerHTML="";
         recipes.forEach((recipe) => {
            console.log(recipe)
            const recetteItemEL = document.createElement("li");
            recetteItemEL.classList.add("recette-item")
            let recetteImageEL = document.createElement("img");
            recetteImageEL.src=recipe.image;
            const recetteTitreEL = document.createElement("h2");
            recetteTitreEL.innerText = recipe.title;
            let recetteIngredientsEL = document.createElement("p");
            recetteIngredientsEL.innerHTML = `<strong> Ingredients :</strong>${ recipe.extendedIngredients.map((ingredient) => 
                ingredient.original).join(" , ")}`;
            let recetteDetails= document.createElement("a");
            recetteDetails.href= recipe.sourceUrl;
            recetteDetails.target="blank";
            recetteDetails.innerText = "Détails"
            
            recetteItemEL.appendChild(recetteImageEL);
            recetteItemEL.appendChild(recetteTitreEL);
            recetteItemEL.appendChild(recetteIngredientsEL)
            recetteItemEL.appendChild(recetteDetails)
            recetteListe.appendChild(recetteItemEL);
            
         });
    }
    
    async function getRecettes(){
        const reponse = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${APIrecettes}`);
        const data = await reponse.json();
        return data.recipes;
            
    }
    
    async function init(){
        const recettes = await getRecettes();
        console.log(recettes)
        displayRecettes(recettes)
    }
    init();
}