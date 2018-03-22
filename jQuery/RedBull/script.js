let entry = {
  title: null,
  description: null,
  price: null,
  image: null
}

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