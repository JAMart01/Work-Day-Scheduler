// Completed Objectives 

// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

// Incomplete Objectives 
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours (This means 9-5 according to the mock-up)
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist








// Global Variables 
var currentDayEl = document.getElementById("currentDay");







// Function that formats the date and time and adds it to the page 
var currentTime = function() {
    currentDayEl.textContent = moment().format("dddd, MMMM Do, h:mm a");
};


// Loads the date and time upon opening the page 
currentTime();

// Update's the time every second to maintain accuracy 
setInterval(currentTime, 1000);



