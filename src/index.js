function generateItinerary(event) {
    event.preventDefault()
    new Typewriter("#itinerary", {
      strings: ["Itinerary"],
        autoStart: true,
        delay: 1,
      cursor: ""
    })
}

let itineraryFormElement = document.querySelector("#itinerary-form")
itineraryFormElement.addEventListener("submit", generateItinerary)