// Given the following URL : https://api.myjson.com/bins containing a JSON object about your favorite GOT character. 
// Create a AJAX call for that url to grab the JSON data and log the result in your console.
// Loop through the aliases array and console log out the results
// Return the value of 'actor' in the 'playedBy' object.
// Append the name of the actor to the dom to a p element with the id of "my-actor"

let p = $("<p></p>").appendTo("body").attr("id", "my-actor")

$.ajax({
  url: "https://api.myjson.com/bins/bygvt",
  success: function(response){
    console.log(response);
    response.aliases.forEach(function(e){
      console.log(e)
    })
    let kit = response.playedBy.actor
    $(p).text(kit)
  }
})