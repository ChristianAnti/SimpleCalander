// ## Acceptance Criteria

// ```md
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future



// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage

var toDoInput = document.querySelector("#toDoInput");
var saveButton = document.querySelector("#saveButton");

renderLastRegistered();

function renderLastRegistered() {

    if(localStorage.getItem("toDoInput") !== null){
      var toDoInput = localStorage.getItem("toDoInput");

      console.log(toDoInput);
      toDoInput.innerHTML = toDoInput;

    }}


// WHEN I refresh the page
// THEN the saved events persist

saveButton.addEventListener("click", function(event) {
    event.preventDefault();
  
    var toDoInput = document.querySelector("#toDoInput").value;

      localStorage.setItem("toDoInput", toDoInput);
      
      renderLastRegistered();
    }
  );
