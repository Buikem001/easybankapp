const links = document.querySelector('.links');
const hamburger = document.querySelector('.hamburger');
const hamburgerclose = document.querySelector('.hamburgerclose');

function OpenNav() {
    links.style = "top: 30%";
    hamburgerclose.style = "display: block";
    hamburger.style = "display: none";
}

function CloseNav() {
    links.style = "top: -30%";
    hamburgerclose.style = "display: none";
    hamburger.style = "display: block";
}

let dateCalculation = new Date("2022-08-23");
let numberOfDaysToAdd = 93;
let result = dateCalculation.setDate(dateCalculation.getDate() + numberOfDaysToAdd);
endDate = new Date(result);

const remainingDays = (Math.abs(endDate - (new Date())))
console.log(Math.floor(remainingDays / (24 * 60 * 60 * 1000)));
