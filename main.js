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