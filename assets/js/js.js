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

// Used to add event listener to container element 
var container = document.getElementById("BigContainer");



// Functions 


// function to get the content of the text area and save it to local storage 
container.addEventListener('click', function(event) {
    
    var targetEL = event.target 
    
    if (targetEL.matches(".saveBtn")) {
       var id = targetEL.getAttribute("id")
       
       var selectedDiv = document.querySelector(".time-block[id='"+id+"']");

       var selectedTA = selectedDiv.querySelector("textarea").value;

       console.log(selectedTA);
      
        localStorage.setItem(id, selectedTA);

    }
    
});
 // function to load in the textbox value from the localStorage 
var loadText = function() {
    for(i=0; i < textArea.length; i++) {
        var id = i + 9;

        var selectedDiv = document.querySelector(".time-block[id='"+id+"']");

        var selectedTA = selectedDiv.querySelector("textarea");

        selectedTA.textContent = localStorage.getItem(id);

        console.log(localStorage.getItem(id));
    }
};


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

// // Function call to load in the textarea content saved in localStorage 
loadText();