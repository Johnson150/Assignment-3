/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let dailyRate = 35;
let days = [];
let counter = 0;
let totalcost

let dayButton = document.querySelectorAll('.day-selector li');
let clearButton = document.querySelector('#clear-button');
let halfButton = document.querySelector('#half');
let fullButton = document.querySelector('#full');
let calculatedCost = document.querySelector('#calculated-cost')

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function updatecounter(day) {
    if (!days.includes(day)) {
        days.push(day);
        counter++;
    }
}

function updateTotalCost() {
    const costTotal = counter * dailyRate;
    calculatedCost.innerHTML = costTotal
}


function daybuttonclass(button) {
    if (button.classList.contains('clicked')) {
        button.classList.remove('clicked');
    } else {
        button.classList.add('clicked');
    }
}

dayButton.forEach(function (button) {
    button.addEventListener('click', function () {
        updatecounter(button.innerText);
        daybuttonclass(button);
        updateTotalCost();
        if (!days.includes(days)) {
            days.push(days);
            counter++;
        }
    });
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clearDays() {
    days = [];
    counter = 0;
    dayButton.forEach(function (button) {
        button.classList.remove('clicked');
    });
    updateTotalCost(0)
}

clearButton.addEventListener('click', clearDays);



/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.



function halfdayrate() {
    dailyRate = 20;
    daybuttonclass(halfButton);
    daybuttonclass(fullButton)
    updateTotalCost()
}


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function fulldayRate() {
    dailyRate = 35;
    daybuttonclass(fullButton);
    daybuttonclass(halfButton);
    updateTotalCost();
}

fullButton.addEventListener('click', fulldayRate);
halfButton.addEventListener('click', halfdayrate);



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

updateTotalCost();

