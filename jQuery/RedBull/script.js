let entry = {
  title: null,
  description: null,
  price: null,
  image: null
}

let newItem = null
let imageBox = null
let image = null
let detailDiv = null
let titleDiv = null
let titleH3 = null
let cost = null
let buttonDiv = null
let actualButton = null
let desciption = null

function createEntry(){
  //create new item div
  newItem = $("<div/>").appendTo("#container").addClass("item")
  //add image to image container and append to item div
  imageBox = $("<div/>").appendTo(newItem).addClass("image-box")
  image = $("<img/>").appendTo(imageBox)
  //add div container to hold title and cost, append to item div
  detailDiv = $("<div/>").appendTo(newItem).addClass("details")
  //add the title to the title container and append the container to the detail div
  titleDiv = $("<div/>").appendTo(detailDiv).addClass("title")
  titleH3 = $("<h3/>").appendTo(titleDiv)
  //append the cost header to the detail div
  cost = $("<h4/>").appendTo(detailDiv)
  //append the button container to the detail div
  buttonDiv = $("<div/>").appendTo(detailDiv).addClass("button")
  //put the button in its container
  actualButton = $("<button/>").appendTo(buttonDiv)
  //append the description container to the item div
  description = $("<div/>").appendTo(newItem).addClass("description")
}

createEntry()
$.ajax({
  url: "https://www.redbullshopus.com/products.json",
  success: function(response){
    let products = response.products
    products.forEach(function(product){
      entry.title = product.title
      entry.description = product.body_html
      entry.price = product.variants[0].price
      entry.image = product.images[0].src
    })
    console.log(entry.title)
  }
})