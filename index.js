var TempStatusOfItem;

function showList() {
  var ToDoList = JSON.parse(localStorage.getItem("ToDoList"));
  if (ToDoList != null) {
    makeHTMLList(ToDoList);
    TempStatusOfItem = ToDoList.ToDoStatus;
  }
}

function makeHTMLList(ToDoList) {
  var ToDoListToHTML = "";
  for (let index = 0; index < ToDoList.ToDoItem.length; index++) {
    ToDoListToHTML =
      ToDoListToHTML +
      "<div class='toDoElements col-10  p-1 m-2' id=" + index +" ondblclick=markCompleted(this.id) style='align:left'>" + parseInt(index + 1) +". "+ ToDoList.ToDoItem[index] +"</div>";
  }
  document.getElementById("toDoItems").innerHTML = ToDoListToHTML;
}
function markCompleted(ToDoID) {
  if (TempStatusOfItem[ToDoID] == 0) {
    document.getElementById(ToDoID).style = "text-decoration: line-through;";
    TempStatusOfItem[ToDoID] = 1;
  } else {
    document.getElementById(ToDoID).style = "";
    TempStatusOfItem[ToDoID] = 0;
  }
}

function addItem(addItemValue) {
  var ToDoList = JSON.parse(localStorage.getItem("ToDoList"));
  if (ToDoList != null) {
    ToDoList.ToDoItem.push(addItemValue);
    ToDoList.ToDoStatus.push(0);
  } else {
    var ToDoList = {
      ToDoItem: [],
      ToDoStatus: [],
    };
    ToDoList.ToDoItem.push(addItemValue);
    ToDoList.ToDoStatus.push(0);
  }
  localStorage.setItem("ToDoList", JSON.stringify(ToDoList));
  showList();
}

function clearList() {
  document.getElementById("toDoItems").innerHTML = "";
  for (let index = 0; index < TempStatusOfItem.length; index++) {
      TempStatusOfItem[index] = 1;
  }
}
function clearCompleted() {
  for (let index = 0; index < TempStatusOfItem.length; index++) {
    if (TempStatusOfItem[index] == 1) {
      document.getElementById(index).remove();
    }
  }
}
function saveList() {
    console.log(TempStatusOfItem);
  var ToDoList = JSON.parse(localStorage.getItem("ToDoList"));
  for (let index = TempStatusOfItem.length; index >= 0; index--) {
    if (TempStatusOfItem[index] == 1) {
      console.log(ToDoList.ToDoItem);
      ToDoList.ToDoItem.splice(index, 1);
      ToDoList.ToDoStatus.splice(index, 1);
    }
  }
  localStorage.setItem("ToDoList", JSON.stringify(ToDoList));
  showList();
}
function notificationShower(){
    
}

showList();
