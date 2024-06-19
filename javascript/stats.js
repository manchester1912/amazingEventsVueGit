

const linkAmazing = "https://aulamindhub.github.io/amazing-api/events.json"

fetch(linkAmazing)
  .then(responsive => responsive.json())
  .then(data => {
    let pastEvents = []

    for (let index = 0; index < data.events.length; index++) {
      if (data.currentDate > data.events[index].date) {
        pastEvents.push(data.events[index])
      }
    }

    let highestAssistance = document.getElementById("highest")
    let lowestAssistance = document.getElementById("lowest")
    let largerCapacity = document.getElementById("capacity")
    let subtitleCapacity = document.getElementById("maxCapacity")
    let subtitleMaxPercentage = document.getElementById("highestEvent")
    let subtitleMinPercentage = document.getElementById("lowestEvent")

    let percentage = pastEvents.map(evento => ((evento.assistance / evento.capacity) * 100).toFixed(2))
    let capacity = data.events.map(evento => evento.capacity)

    let eventsAndPercentage = pastEvents.map(event => {
      return {
        percentage: ((event.assistance / event.capacity) * 100).toFixed(2),
        name: event.name
      }
    })

    const maximumPercentage = Math.max(...percentage)
    const minimumPercentage = Math.min(...percentage)
    const maximumCapacity = Math.max(...capacity)

    let categoryHighest = eventsAndPercentage.find(event => event.percentage == maximumPercentage)
    let categoryLowest = eventsAndPercentage.find(event => event.percentage == minimumPercentage)

    let eventMaxCapacity = data.events.find(evento => evento.capacity === maximumCapacity)

    highestAssistance.innerText = maximumPercentage + " %"
    lowestAssistance.innerText = minimumPercentage + " %"
    largerCapacity.innerHTML = maximumCapacity.toLocaleString() + " People"
    subtitleCapacity.innerHTML = eventMaxCapacity.category + ": " + eventMaxCapacity.name
    subtitleMaxPercentage.innerHTML = categoryHighest.name
    subtitleMinPercentage.innerHTML = categoryLowest.name
  })


fetch(linkAmazing)
  .then(responsive => responsive.json())
  .then(data2 => {

    let pastEvents = data2.events.filter(event => data2.currentDate > event.date)

    let filterCategory = pastEvents.reduce((added, event) => {
      if (!added[event.category]) {
        added[event.category] = { category: event.category, total: 0, capacity: 0, assistance: 0 }
      }

      added[event.category].total += event.assistance * event.price
      added[event.category].capacity += event.capacity
      added[event.category].assistance += event.assistance
      return added
    }, {})

    let arrayCategory2 = Object.values(filterCategory)

    function sendData(item) {
      let fatherDiv = document.getElementById("fatherTable2")
      let tableData = document.createElement("tr")
      tableData.classList.add("text-center")

      tableData.innerHTML = `
            <td>${item.category}</td>
            <td>$ ${(item.total).toLocaleString()}</td>
            <td>${((item.assistance / item.capacity) * 100).toFixed(2)} %</td>`

      fatherDiv.appendChild(tableData)
    }

    function printData(array) {
      for (let index = 0; index < array.length; index++) {
        sendData(array[index])

      }
    }

    printData(arrayCategory2)

  })


fetch(linkAmazing)
  .then(responsive => responsive.json())
  .then(data => {

    let upcomingEv = data.events.filter(event => data.currentDate < event.date)

    let filterCategory = upcomingEv.reduce((added, event) => {
      if (!added[event.category]) {
        added[event.category] = { category: event.category, total: 0, capacity: 0, estimate: 0 }
      }

      added[event.category].total += event.estimate * event.price
      added[event.category].capacity += event.capacity
      added[event.category].estimate += event.estimate
      return added
    }, {})

    let arrayCategory = Object.values(filterCategory)

    function sendData(item) {
      let fatherDiv2 = document.getElementById("fatherTable")
      let tableData2 = document.createElement("tr")
      tableData2.classList.add("text-center")

      tableData2.innerHTML = `
            <td>${item.category}</td>
            <td>$ ${(item.total).toLocaleString()}</td>
            <td>${((item.estimate / item.capacity) * 100).toFixed(2)} %</td>`

      fatherDiv2.appendChild(tableData2)
    }

    function printData(array) {
      for (let index = 0; index < array.length; index++) {
        sendData(array[index])

      }
    }

    printData(arrayCategory)

  })





