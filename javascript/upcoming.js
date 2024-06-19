import * as moduleFuntions from "./allFuntions.js"

const linkAmazing = "https://aulamindhub.github.io/amazing-api/events.json"

fetch(linkAmazing)
    .then(response => response.json())
    .then(data => {

        let upcomingEv = []

        for (let index = 0; index < data.events.length; index++) {
            if (data.currentDate < data.events[index].date) {
                upcomingEv.push(data.events[index])
            }

            let checkDiv = document.getElementById("checkboxFather")
            let categories = Array.from(new Set(upcomingEv.map(event => event.category)))
            let categoryValue = categories.map(category => ({ category }))

            moduleFuntions.cardsHtml(upcomingEv)
            moduleFuntions.createCheck(categoryValue)
            moduleFuntions.cardsHtml(upcomingEv)

            let searchbar = document.getElementById("search")
            searchbar.addEventListener("input", () => moduleFuntions.filterCards(upcomingEv))

            checkDiv.addEventListener("change", () => moduleFuntions.filterCards(upcomingEv))

        }
    })

