// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 10px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
let ticketCost;
let ticketType;
let addCharges;
let cost;
let hrs;
let currentTotalCost
let overallCost = 0;




const details = document.getElementsByName("name");
console.log(details);

const btnAdd = document.getElementById("add-to-order");
console.log(btnAdd);
const btnAddToFavourites = document.getElementById("add-to-favourites")
const btnOrderFavourites = document.getElementById("order-favourites")

const btnPlaceOrder = document.getElementById("place-order");
console.log(btnPlaceOrder);

const sizeChoices = document.getElementsByName("size");
console.log(sizeChoices);

const duration = document.getElementsByName("hrs");
console.log(duration);


const txtCost = document.getElementById("cost");
console.log(txtCost.innerHTML);

const txtOverallCost = document.getElementById("overall-cost");
console.log(txtOverallCost.innerHTML);

const txtNumber = document.getElementById("num");

const txtOutput = document.getElementById("output");
const theForm = document.getElementsByName("myForm");
console.log(myForm);


window.addEventListener("load", init);

function init() {
    currentTotalCost = 0;
    totalTicketCost = 0;
    addCharges = 0;
    hrs = 3;

    hrs3 = "no 3 hours";
    halfDay = "no half day";
    fullDay = "no full day";
    cost = ticketCost + addCharges;
    resetOrderFields();
}
sizeChoices.forEach(item => item.addEventListener("change", checkTicket));
sizeChoices.forEach(item => item.addEventListener("keyup", checkTicket));
function checkTicket() {
    // if(isNaN(this.value)) // if entered value is not a number dont process the data
    //     return ;

    // alert(this.value);
    currentTotalCost -= totalTicketCost
    let finalTicketCost = 0;
    let ticketCost = 0;
    for (let index = 0; index < duration.length; index++) {
        const element = sizeChoices[index];
        if (element.id == "SL Adult") {
            ticketCost = 1200.00;
            size = "SL Adult";
        }
        else if (element.id == "SL Child") {
            ticketCost = 700.00;
            size = "SL Child";
        }
        else if (element.id == "Foreinger Adult") {
            ticketCost = 5500.00;
            size = "Foreinger Adult";
        }
        else if (element.id == "Foreinger Child") {
            ticketCost = 2700.00;
            size = "Foreinger Child";
        }
        finalTicketCost += ticketCost * element.value;
    }
    totalTicketCost = finalTicketCost;
    //let current_cost = floatVal(txtCost.innerText);
    cost = totalTicketCost + currentTotalCost;
    currentTotalCost = cost;

    txtCost.innerText = `$  ${cost}`;

}
duration.forEach(item => item.addEventListener("change", checkHrs));

function checkHrs() {
    currentTotalCost -= addCharges;
    addCharges = 0;

    for (let index = 0; index < duration.length; index++) {
        const element = duration[index];
        let choiceTicket = element.previousElementSibling.value;
        if (element.value != "") {

            if (element.id == "foreigner-ticket") {
                if (element.value == "12Hrs") {
                    addCharges += (450.00 * choiceTicket);
                    halfDay = "Half Day";
                }
                else if (element.value == "24Hrs") {
                    addCharges += (800.00 * choiceTicket);
                    fullDay = "Full Day";
                }
            }
            else {
                if (element.value == "12Hrs") {
                    addCharges += (350.00 * choiceTicket);
                    halfDay = "Half Day";
                }
                else if (element.value == "24Hrs") {
                    addCharges += (600.00 * choiceTicket);
                    fullDay = "Full Day";
                }
            }

        }

    }

    cost = currentTotalCost + addCharges;
    currentTotalCost = cost;
    txtCost.innerText = `$  ${cost}`;
}

function resetOrderFields() {
    for (let index = 0; index < sizeChoices.length; index++) {
        const element = sizeChoices[index]
        element.value = "";
    }

    for (let index = 0; index < duration.length; index++) {
        const element = duration[index]
        element.value = "";
    }
}


    btnPlaceOrder.addEventListener("click", placeOrder);
    function placeOrder(evt) {


        cost == currentTotalCost;
        txtCost.innerText = '$ 0.00';
        txtOverallCost.innerText = `$ ${cost}`;
        init();
        alert("Thank you for Ordering");


    }
btnAdd.addEventListener("click", addToOrder)
function addToOrder(e) {

    overallCost += currentTotalCost;
    txtCost.innerText = '$ 0.00';
    txtOverallCost.innerText = `$ ${overallCost}`;
    init();
}


btnAddToFavourites.addEventListener("click", addToFavourite)
function addToFavourite() {
    localStorage.setItem("favourite", currentTotalCost);
    txtCost.innerText = '$ 0.00';
    init();

}
btnOrderFavourites.addEventListener("click", orderFavourites)
function orderFavourites() {
    currentTotalCost = parseFloat(localStorage.getItem("favourite"));
    addToOrder();
    localStorage.removeItem("favourite");

}





