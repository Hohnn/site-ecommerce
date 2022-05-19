let fashion = document.getElementById('fashion')
let panier = document.getElementById('panier') 
let vosArticles = document.getElementById('vosArticles')
let myCartArray = []
let allArticlesArray = []
let panierCount = 0

// panier.innerHTML = "+ " + localStorage.getItem("mycount")

// localStorage.setItem("mycount", panierCount)
// let nombres = localStorage.getItem("mycount")
// nombres = nombres.split(",")
// if (localStorage.getItem("mycount") != ""){
//     panierCount = localStorage.getItem("mycount")
// } 

fetch('dress.json')
    .then(response => response.json())
    .then(data => {
        let count = 0
        let dress = data.results
        dress.forEach(element => {
            allArticlesArray.push(element)
            fashion.innerHTML += `
                <div class="card my-2 col-lg-3 col-10 mx-2" >
                    <div id="carousel-${element.id}" class="carousel carousel-dark slide" data-bs-ride="carousel" >
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="10000">
                            <img style="width:100%" src="img/${element.imgs[0]}" alt="vue vêtement de face">
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                            <img style="width:100%" src="img/${element.imgs[1]}" alt="vue vêtement de dos">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carousel-${element.id}" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carousel-${element.id}" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div class="card-body">
                        <p>${element.name}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="fw-bold">${element.price}€</div>
                            <button id="${element.id}-btn" class="btn p-2 smoll-text" onclick="addToCart(${count})">Ajouter au panier</button>
                        </div>
                    </div>
                </div>
            `
            count ++
        });
    })

function addToCart(element) {  
    panierCount++
    panier.innerHTML = "+ " + panierCount
    myCartArray.push(allArticlesArray[element])
    console.log(myCartArray)
}

function accessCart() {
    // let retrieve = localStorage.getItem("monTableau")
    // retrieve = retrieve.split(",")
    myCartArray.forEach(element => {
        vosArticles.innerHTML += `<div class="card mt-1" >
        <div class="row g-0">
          <div class="col-lg-4 col-4">
          <img  style="width:100%"  src="img/${element.imgs[0]}" alt="vêtement dans votre panier">
          </div>
          <div class="col-lg-8 col-8">
            <div class="card-body">
              <p class="card-title fw-bold fs-5">${element.name}</p>
              <p class="card-text">${element.price}€</p>
              
              <input type="number" class="taille"></input>
              <button class="btn filtres text-dark fw-bold btn-sm d-flex align-items-end " onclick="deleteItem()">Supprimer</button>
            </div>
            
          </div>
        </div>
      </div>`
    });
}


