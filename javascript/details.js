const linkAmazing = "https://aulamindhub.github.io/amazing-api/events.json"

fetch(linkAmazing)
  .then(response => response.json())
  .then(data => {
    let UrlParams = new URLSearchParams(window.location.search)

    let details = UrlParams.get("id")

    let evento = data.events.find(evento => evento._id === parseInt(details))

    let divContainer = document.getElementById("fatherContainer")

    let eventDetail = `
<div class="col-12 col-xl-6 d-flex justify-content-center p-1 my-1 border1912">
        <img src="${evento.image}" class="img-fluid w-50" alt="...">
      </div>

      <div class="col-12 col-xl-6 border1912 p-1 my-1 d-flex justify-content-center align-items-center ">
        <div class="card bg-black text-white" style="width: 18rem;">
          <div class="card-header">
            <p class="fs-4 fw-bold fst-italic text-center">${evento.name} </p>
          </div>
          <ul class="list-group list-group-flush ">
            <li class="list-group-item bg-secondary text-white">Date: ${evento.date}</li>
            <li class="list-group-item bg-dark text-white">${evento.description}
            </li>
            <li class="list-group-item bg-secondary text-white">Category: ${evento.category}</li>
            <li class="list-group-item bg-dark text-white">${evento.date < data.currentDate ? "Assistance: " : "Estimate: "}${(evento.assistance || evento.estimate).toLocaleString()}</li>
            <li class="list-group-item bg-secondary text-white">Place: ${evento.place}</li>
            <li class="list-group-item bg-dark text-white">Price: ${evento.price} USD</li>
          </ul>
        </div>
      </div>
`

    divContainer.innerHTML = eventDetail

  })





// let UrlParams = new URLSearchParams(window.location.search)

// let details = UrlParams.get("id")
// console.log(details);

// let evento = data.events.find(evento=> evento._id === details)

// console.log(evento);

// let divContainer = document.getElementById("fatherContainer")

// let eventDetail = `
// <div class="col-12 col-xl-6 d-flex justify-content-center p-4 my-4 border1912">
//         <img src="${evento.image}" class="img-fluid" alt="...">
//       </div>

//       <div class="col-12 col-xl-6 border1912 p-4 my-4 d-flex justify-content-center align-items-center ">
//         <div class="card bg-black text-white" style="width: 18rem;">
//           <div class="card-header">
//             <p class="fs-4 fw-bold fst-italic text-center">${evento.name} </p>
//           </div>
//           <ul class="list-group list-group-flush ">
//             <li class="list-group-item bg-secondary text-white">Date: ${evento.date}</li>
//             <li class="list-group-item bg-dark text-white">${evento.description}
//             </li>
//             <li class="list-group-item bg-secondary text-white">Category: ${evento.category}</li>
//             <li class="list-group-item bg-dark text-white">${evento.date < data.currentDate?"Assistance: ":"Estimate: "}${evento.assistance || evento.estimate}</li>
//             <li class="list-group-item bg-secondary text-white">Place: ${evento.place}</li>
//             <li class="list-group-item bg-dark text-white">Price: ${evento.price} USD</li>
//           </ul>
//         </div>
//       </div>
// `

// divContainer.innerHTML = eventDetail