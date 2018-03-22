// Given the following URL : https://api.myjson.com/bins containing a JSON object about your favorite GOT character. 
// Create a AJAX call for that url to grab the JSON data and log the result in your console.
// Loop through the aliases array and console log out the results
// Return the value of 'actor' in the 'playedBy' object.
// Append the name of the actor to the dom to a p element with the id of "my-actor"

// let p = $("<p></p>").appendTo("body").attr("id", "my-actor")

// $.ajax({
//   url: "https://api.myjson.com/bins/bygvt",
//   success: function(response){
//     console.log(response);
//     response.aliases.forEach(function(e){
//       console.log(e)
//     })
//     let kit = response.playedBy.actor
//     $(p).text(kit)
//   }
// })


// Visit the star wars api website (https://swapi.co/) and read through the documentation here.
// 1. Name 4 data points that are available through this API.
// 2. Which endpoint would return a listing of all star wars films?
// 3. Which endpoint would give you information on the 3rd film?
// 4. What would the url look like?
// 5. Give an example of what kind of site you could build with this API?
// Visit the OMDB api website(http://www.omdbapi.com/) and read through the documentation.
// Lets practice using a form tag to submit a AJAX API call
// 1. Create a HTML page that has a form tag.
// 2. The form tag should take in input for a movie title and another input for movie year
// 3. Use that form to call the omdb API with the values from the form input and append the response onto your page in a div. You can do all the data or just some parts, your call!
// Note : By default forms will try to submit and refresh the page. Look into a way to prevent that behavior.


$("button").click(function(event){
  event.preventDefault()
    let urlString = $("#form")[0].action
    let title = $("#title").val()
    let year = $("#year").val()
    if (title.length > 1 && year == undefined) {
      title.split(" ").join("+")
      $.ajax({
        url: urlString + "t=" + title,
        success: function(response) {
          Object.values(response).forEach(function(value){
            $("<p/>").appendTo("#response").text(value)
          })
        }
      })
    } else {
      $.ajax({
        url: urlString +  "t=" + title + "&y=" + year,
        success: function(response) {
          Object.values(response).forEach(function(value){
            $("<p/>").appendTo("#response").text(value)
          })
        }
      })
    }
})





















