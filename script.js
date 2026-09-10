let header_twee = document.querySelector("#header-twee");
let header = document.querySelector("#header");

function mango() {
    header.innerHTML = "<h1>!!IK HOU VAN MANGO'S!!</h1>";
}
header_twee.addEventListener("click", mango);

function OMGEKEERD() {
    header.innerHTML = "<h1>Mango's</h1>";
}
header.addEventListener("click", OMGEKEERD);
