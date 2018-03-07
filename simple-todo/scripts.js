// let input = prompt("What would you like to do?");

// let toDoList = [];

window.setTimeout(function() {
  let input = undefined;

  let toDoList = [];

  while (input !== 'quit'){

  input = prompt("What would you like to do?");
  
  switch (input) {
    case 'new':
      let item = prompt("What would you like to add to your list?")
      toDoList.push(item);
      break

    case default:
      alert("I'm sorry, please pick valid choice!");
      break
    } 
  }

  alert("Great! See you next time!")

}, 500);
