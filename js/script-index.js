$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	//llamando a la funcion para que sea ejecutada
	 printNews();


});


/*
* Función que se encarga de pintar TODAS las recetas que tengan
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);
	// var recipes= recipesArray;
	for (var i = 0; i < recipesArray.length; i++) {
		if (recipesArray[i].highlighted===true) {
			renderRecipe(recipesArray[i]);
			// console.log(recipes[i]);
		}

	}
};

/*
* Función que se encarga de pintar UNA recetas que tenga
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	// console.log('Voy a pintar la receta: ', recipe);
	console.log( recipe.title );
	console.log( recipe.source.name);
	console.log( recipe.source.url);

	$('.list-recipes').append("<a class='item-recipe' href='#'>" +
	"<span class='attribution'>" +
	"<span class='title-recipe'>" + recipe.title+ "</span>" +
	"<span class='metadata-recipe>" +
	"<span class='author-recipe'>" + recipe.source.name + "</span>" +
	" <span class='bookmarks-recipe'>" +
	"<span class='icon-bookmark'></span> " +
	"</span>"+
	"</span>"+
	"</span>" +
	"<img src='img/recipes/320x350/"+ recipe.name + ".jpg'>" +"</a>"
	);
}


/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {

}
//elimina lo que tenga laclase hidden en el index
$('.hidden').hide();

//funcion para agregar noticias
function printNews(){
	$('#news').text('NUEVAS RECETAS');

}
