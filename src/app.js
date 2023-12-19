function generateQuote(event) {
  event.preventDefault();

  new Typewriter("#quote", {
    strings: ["Hello", "World"],
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

let quotesFormElement = document.querySelector("#positive-quotes-form");
quotesFormElement.addEventListener("submit", generateQuote);
