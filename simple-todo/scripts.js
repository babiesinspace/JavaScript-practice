// let input = prompt("What would you like to do?");

// let toDoList = [];

window.setTimeout(function() {
  let input = undefined;

  let toDoList = [];

  while (input != 'quit'){

  input = prompt("What would you like to do?");
  
  switch (input) {
    case 'new':
      let item = prompt("What would you like to add to your list?")
      toDoList.push(item);
      break
    case 'list':
      console.log("You need to:")
      toDoList.forEach(function(element) {
        console.log(element);
      });
      break
    case 'quit':
      alert("Great! See you next time!")
      break
    default:
      alert("I'm sorry, please pick valid choice!");
    } 
  }

}, 500);
