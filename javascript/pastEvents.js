import * as moduleFuntions from "./allFuntions.js"

const linkAmazing = "https://aulamindhub.github.io/amazing-api/events.json"

fetch(linkAmazing)
  .then(response => response.json())
  .then(data => {

    let pastEvents = []

    for (let index = 0; index < data.events.length; index++) {
      if (data.currentDate > data.events[index].date) {
        pastEvents.push(data.events[index])
      }
    }

    let checkDiv = document.getElementById("checkboxFather")
    let categories = Array.from(new Set(pastEvents.map(event => event.category)))
    let categoryValue = categories.map(category => ({ category }))

    moduleFuntions.cardsHtml(pastEvents)
    moduleFuntions.createCheck(categoryValue)
    moduleFuntions.cardsHtml(pastEvents)

    let searchbar = document.getElementById("search")
    searchbar.addEventListener("input", () => moduleFuntions.filterCards(pastEvents))

    checkDiv.addEventListener("change", () => moduleFuntions.filterCards(pastEvents))

  })

