function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "Triple Chocolate Cake",
    autoStart: true,
    delay: 15,
    cursor: "",
  });
}

let recipeFormElement = document.querySelector("#Cake-Recipe-Generator-Form");
recipeFormElement.addEventListener("submit", generateRecipe);
