
let obrazekPridat = document.querySelector(".add img");
let row = document.querySelector(".row")
let div = document.querySelector(".add")

let uni = 0;


obrazekPridat.addEventListener('click', event => {


let cloneRow = row.cloneNode(true)
let original = cloneRow.querySelector("input")
original.value = ""

original.id = uni;
let label = cloneRow.querySelector("label")
label.setAttribute("for", uni)
//
let select =cloneRow.querySelector("select")
select.id = uni + "D"
let labelSelect = cloneRow.querySelector("label:nth-of-type(2)")
labelSelect.setAttribute("for",uni + "D")
//

let minus = document.createElement("img")
minus.src = "./icons/minus-84.png"
cloneRow.append(minus)


div.before(cloneRow)

uni ++

minus.addEventListener('click', event => {
minus.parentElement.remove()
})
});






// vyberou se HTML prvky a přidají se do proměnných
// Přidá se funkce pro kliknutí na PLUS
// Naklonuje se řádek s nulovou hodnotou 
// Konec funkce PLUS
// Vytvoří se proměnná MINUS
// Minus se přidá za řádek
// Přidá se funkce pro kliknutí na MINUS