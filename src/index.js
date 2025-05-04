function displayItinerary(response) {
    console.log("generated");
    console.log(response.data.answer)

    new Typewriter("#itinerary", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
    })
}

function generateItinerary(event) {
    event.preventDefault();

    let destinationInput = document.querySelector("#user-destination");

    let apiKey = "t7ae374d4862800ofd885f7fba24b093";
    let prompt = `Generate a 5-day travel itinerary with ${destinationInput.value} as destination. Please do not include anything in your answer except the itinerary itself`
    let context =
      "You are a travel expert and love to write travel itineraries. Your mission is to generate 5-day itineraries in basic HTML, but please avoid using quotes and the word html at the beginning or other markdown"
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`

    let itineraryElement = document.querySelector("#itinerary")
    itineraryElement.classList.remove("hidden")
    itineraryElement.innerHTML = `<div class="blink">⌛ Generating your itinerary for ${destinationInput.value}...</div>`

    console.log("Generating itinerary");
    console.log(`Prompt: ${prompt}`)
    console.log(`Context: ${context}`)

    axios.get(apiUrl).then(displayItinerary);
}

let itineraryFormElement = document.querySelector("#itinerary-form")
itineraryFormElement.addEventListener("submit", generateItinerary)