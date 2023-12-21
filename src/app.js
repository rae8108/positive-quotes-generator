function displayQuote(response) {
  console.log("quotes generated");
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

function generateQuote(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "8b0d9fa4b250096d3e2803d0f00fatob";
  let context =
    "You are a motivational expert AI who loves to provide short motivational quotes. Your task is to provide 2 lines of motivational quote in basic HTML. Do not include a title. Make sure to follow the user instructions.  ";
  let prompt = `User instructions: Generate a positive quote about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating quote");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayQuote);
}

let quotesFormElement = document.querySelector("#positive-quotes-form");
quotesFormElement.addEventListener("submit", generateQuote);
