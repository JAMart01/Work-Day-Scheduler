// Completed Objectives 


// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours (This means 9-5 according to the mock-up)
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event

// Incomplete Objectives 


// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist



// Global Variables 


// Used to manipulate the dom on the header and update the current day and time
var currentDayEl = document.getElementById("currentDay");

// Used to check what the current hour is (ranges from 0-23)
var currentHour = moment().hours();

// Used to access the timeBlock array which contains all of our timeBlocks
var timeBlock = document.getElementsByClassName("time-block"); 

// Used to access the Buttons
var saveButton = document.getElementsByClassName("saveBtn");

// Used to access the content of the text area
var textArea = document.getElementsByClassName("description");





// A for loop to add event listeners to all the save buttons. What purpose will this serve? I have no clue xD
for (i=0; i < saveButton.length; i++) {
    saveButton[i].addEventListener('click', function() {
        console.log(textArea[i].innerText);
    });
}

// Function that formats the date and time and adds it to the page 
var currentTime = function() {
    currentDayEl.textContent = moment().format("dddd, MMMM Do, h:mm a");
};


// Loads the date and time upon opening the page 
currentTime();

// Update's the time every second to maintain accuracy 
setInterval(currentTime, 1000);

// Function used to update the time block colors based on if it's hour is in the past, present, or future. 
var validateTimeBlockHour = function() {
    for (i=0; i < timeBlock.length; i++) {
    
        if(timeBlock[i].id < currentHour) {
            timeBlock[i].className += " past";
        }
        else if(timeBlock[i].id = currentHour) {
            timeBlock[i].className += " present";
        }
        else {
            timeBlock[i].className += " future";
        }
    }
}

// function call to set the classes of the timeblock
validateTimeBlockHour();

// Updates the timeblocks classes every second to ensure the user has up to date accurate information. 
setInterval(validateTimeBlockHour, 15000);
