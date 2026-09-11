let header_twee = document.querySelector("#header-twee");
let header = document.querySelector("#header");
let paragraph_picture = document.querySelector("#paragraph-picture");
let picture = document.querySelector("#picture");

function mango() {
    header.innerHTML = "<h1>!!IK HOU VAN MANGO'S!!</h1>";
}
header_twee.addEventListener("click", mango);

function OMGEKEERD() {
    header.innerHTML = "<h1>Mango's</h1>";
}
header.addEventListener("click", OMGEKEERD);


paragraph_picture.addEventListener('mouseover', function () {
    picture.style.backgroundImage = 'url("images/mangoboom.jpg")';
});

paragraph_picture.addEventListener('mouseout', function () {
    picture.style.backgroundImage = 'url("images/aldi.png")';
});


let tekst = document.querySelector("#tekst");
let mybutton = document.querySelector("#mybutton");


mybutton.addEventListener("click", myfunc);

function myfunc() {
    console.log(tekst.value);
    if (tekst.value == 'appie') {
        picture.style.backgroundImage = "URL('images/appie.png')";
    } else if (tekst.value == 'mango-stukjes') {
        picture.style.backgroundImage = "URL('images/mango-stukjes.jpg')";
    } else if (tekst.value == 'meer mango\'s') {
        picture.style.backgroundImage = "URL('images/meer mango's.jpg')";
    }

}



