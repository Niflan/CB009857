

let donationVal = 0;
let selected;
let selectAmount = 0;

//setvalue function is used to highlight the selected donation amount by the user
function setValue(element) {
    let amount = element;
    if (!selected) {
        amount.style.background = "#4c9e9e";
        selectAmount = amount;
        selected = true;
    } else {
        selectAmount.style.background = "#262c36";
        amount.style.background = "#4c9e9e";
        selectAmount = amount;
    }
}


function matchExists(regex, value) {
    let mat = value.match(regex);
    const matchExists = mat != null;
    return (matchExists && mat[0].length == value.length);
}
function validateCVC() {
    const cvc = document.getElementById("cvc");
    const cvcreg = /\d{3,4}/;
    return matchExists(cvcreg, cvc.value);
}

function validateCC() {
    const cc = document.getElementById("cc");
    const ccreg = /\d{16}/;
    return matchExists(ccreg, cc.value);
}
function validateName() {
    const name = document.getElementById("name");
    const namereg = /[a-zA-Z]*\s?[a-zA-Z]*/;
    return matchExists(namereg, name.value);
}
function validateDate() {
    const date = document.getElementById("date");
    const datereg = /(1[0-2]|0[1-9]|\d)\/(1[7-9]|[2-9]\d)/;
    return matchExists(datereg, date.value);
}

   
// The vlaidate function is used to validate the  form and display the amount donated by the user . 
function validate() {
   
  
    const cvc = validateCVC();
    const cc = validateCC();
    const date = validateDate();
    const name = validateName();

    const allAreValid = cvc && cc && date && name;

    if (allAreValid) {
        switch (Number(selectAmount.id)) {
            case 1:
                donationVal = 100;
                break;
            case 2:
                donationVal = 500;
                break;
            case 3:
                donationVal = 1000;
                break;
            case 4:
                donationVal = 2000;
                break;
            case 5:
                donationVal = 5000;
                break;
            case 6:
                donationVal = 10000;
                break;
          
            default:
                break;
        }
        const donation = document.getElementById("donation");
        donation.innerHTML = "Thank you for your Donation Of LKR  " + donationVal ;
        alert("Successfully donated ");

       
    } else {
        if (!cc) {
            const ccError = document.getElementById("cc");
            ccError.style.color = "red";
            alert("Incorret Card No ");
        }
        if (!cvc) {
            const cvcError = document.getElementById("cvc");
            cvcError.style.color = "red";
            alert("Incorret CVC & Please Enter 3 Numbers ");
        }
        if (!date) {
            const dateError = document.getElementById("date");
            dateError.style.color = "red";
            alert("Incorret Format ");
            
        }
        if (!name) {
            const nameError = document.getElementById("name");
            nameError.style.color = "red";
            alert("Incorret Name ");
        }
    }
}

