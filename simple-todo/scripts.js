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
    case 'delete':
      listToDos();
      let crossOff = prompt("What item number would you like to cross off?") - 1;
      toDoList.splice(crossOff, 1);
      break
    case 'list':
      console.log("You need to:")
      listToDos();
      break
    case 'quit':
      alert("Great! See you next time!")
      break
    default:
      alert("I'm sorry, please pick valid choice!");
    } 
  }

function listToDos() {
  toDoList.forEach(function(element, i) {
    console.log((i + 1) + ": " + element);
  });
}

}, 500);
