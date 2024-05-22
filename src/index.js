function displayRecipe(response) {
  console.log("generating recipe");
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 15,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let insturctionsInput = document.querySelector("#user-instructions");
  let apiKey = "f4bbd2f6t053305e58789o06468fa4bf";
  let prompt = "User instructions: Generate recipes for a Cake";
  let context =
    "Find the recipes for a chocolate, vanilla,strawberry, and carrot cake. Doesnt have to be in order. Your mission is to generate a cake recipe and instructions for each in HTML. Make sure to follow user instructions.Sign the peom with 'SheCodes AI' inside <strong> element. at the bottom and not at the top.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating recipe");
  console.log("Prompt: ${prompt}");
  console.log("Context: ${context}");

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#Cake-Recipe-Generator-Form");
recipeFormElement.addEventListener("submit", generateRecipe);
