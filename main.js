// Declaration des variables
let check = document.getElementsByName("check");

let display = document.getElementById("Total");
display.value = 0 + " Dollars";

let alertStock = document.getElementById("alertStock");
let alertMax = document.getElementById("alertMax");

let exitMod = document.getElementById("exitMod");

// seulement un checkbox a choisir
// Pour acheter une subscription et voir le total
function onlyOne(cheks) {
   
    Array.prototype.forEach.call(check, function(event) {
        event.checked = false;
    });

    cheks.checked = true;

    display.value = parseInt(cheks.value) + " Dollars";

    return;
}

// alert Stock
alertStock.addEventListener("click", () => {
    destroy();
});

//declarer la function destroy() comme global.
function destroy () {
    alertMax.classList.remove("d-none");

    return;
}

//pour nettoyer le modal
exitMod.addEventListener("click", function cleaner(){

    destroy();
    alertMax.classList.add("d-none");

    display.value = 0 + " Dollars";

    onlyOne();
    id.checked = false;

    return;

})

// change texte mouseover, mouseout.
const mordor = document.getElementById("mordor");

mordor.addEventListener("mouseover", () => {
    event1();

    return;
})

mordor.addEventListener("mouseout" , () => {
    event2();

    return;
});

function event1 () {
    mordor.innerHTML = '<div class = "fw-bold lh-lg mt-5 text-center"Ash Nazg durbatulûk, <br> ash Nazg gimbatul, <br> ash Nazg thrakatulûk, <br> agh burzum-ishi krimpatul, <br> uzg-Mordor-ishi amal fauthut burgûli.'
}

function event2 () {
    mordor.innerHTML = '<div class="card-body" id="mordor"> <ul class="list"> <li class="lead mb-2"> Sens de la responsabilité </li> <li class="lead mb-2"> Esprit équipe </li> <li class="lead mb-2"> facilité de communication </li> <li class="lead mb-2"> Adaptabilité et Dynamisme </li> </ul> </div>'
}


const darkButton = document.getElementById("darkButton");

darkButton.addEventListener("change", () => {
    if (darkButton == true) {
        document.body.classList.replace("bg-light", "bg-dark");
        document.body.classList.add("text-white");
    } else {
        document.body.classList.replace("bg-dark", "bg-light");
        document.body.classList.remove("text-white");
    }
})

//charger les function apres html.
window.onload = function() {

    onlyOne(cheks);
    destroy();
    cleaner();
    event1();
    event2();

};
