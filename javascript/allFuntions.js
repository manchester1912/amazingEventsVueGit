export function createdCard(cardsContainer, card) {
  let generateCard = document.createElement("div")
  generateCard.classList.add("cards", "pt-2", "my-2", "mx-2", "text-white")

  generateCard.innerHTML =
    `<img src="${card.image}" alt="">
    <h2>${card.name}</h2>
    <p>${card.description}</p>`

  let newChild = document.createElement("div");
  newChild.classList.add("price", "fw-bold", "fs-5", "pb-2")
  newChild.innerHTML = `<p>Price: ${card.price} USD</p>
    <a href="/pages/details.html?id=${card._id}" class="btn btn-danger">Details</a>`

  generateCard.appendChild(newChild)
  cardsContainer.appendChild(generateCard)
}

export function cardsHtml(arrayData) {
  let cardsContainer = document.getElementById("fatherContainer")
  let withOutResults = document.getElementById("noResults")
  cardsContainer.innerHTML = ""

  if (arrayData.length === 0) {
    withOutResults.style.display = "block"
  } else {
    arrayData.forEach(event => createdCard(cardsContainer, event))
    withOutResults.style.display = "none"
  }

}

export function createCheck(arrayData) {
  let checkDiv = document.getElementById("checkboxFather")
  checkDiv.innerHTML = ""
  arrayData.forEach(category => {
    let newCheck = document.createElement("div")
    newCheck.innerHTML = `
        <input class="mx-1" type="checkbox" name="event" value="${category.category.toLowerCase()}">
        <label class="me-1">${category.category}</label>`
    checkDiv.appendChild(newCheck)
  })
}

export function filterCards(data, divContainer) {

  let checked = Array.from(document.querySelectorAll("input[type=checkbox]:checked")).map(input => input.value.toLowerCase())
  let searchText = document.getElementById("search").value.toLowerCase()

  let searchFilter = data.filter(event => {
    let checkFilter = checked.length === 0 || checked.includes(event.category.toLowerCase());
    let textFilter = searchText === '' || event.name.toLowerCase().includes(searchText) || event.description.toLowerCase().includes(searchText)
    return checkFilter && textFilter
  })

  cardsHtml(searchFilter)
}

