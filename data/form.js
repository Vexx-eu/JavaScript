


let osoby = [
    { name: "Štěpán", datumNarozeni: new Date(2000, 9, 14), gender: "Muž", id: 1 },
    { name: "Žaneta", datumNarozeni: new Date(2000, 9, 14), gender: "Žena", id: 2 },
    { name: "Jana", datumNarozeni: new Date(2000, 9, 14), gender: "Žena", id: 3 },
    { name: "Jan", datumNarozeni: new Date(2000, 9, 14), gender: "Muž", id: 4 },
    { name: "Petr", datumNarozeni: new Date(2000, 9, 14), gender: "Muž", id: 5 },
    { name: "Tomáš", datumNarozeni: new Date(2000, 9, 14), gender: "Muž", id: 6 },
    { name: "Anna", datumNarozeni: new Date(2000, 9, 14), gender: "Žena", id: 7 },
    { name: "Vít", datumNarozeni: new Date(2000, 9, 14), gender: "Muž", id: 8 },
]
/*
const spocitejvek = function (){
    const now = new Date();
    console.log(this)
    const diff = Math.abs(now - this.datumNarozeni);
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.24));

}


osoby.forEach((item) => {
    item.vek = spocitejvek

})


osoby.sort((a,b)=> a.name > b.name ? 1 : -1);

console.log(osoby)

*/







 
osoby.sort((a,b)=> a.name > b.name ? 1 : -1); // Seřazení osob podle jména
console.log(osoby)


osoby.sort((a,b)=> a.date > b.date ? 1 : -1); // Seřazení osob datumu narození
console.log(osoby)


osoby.filter(item => item.vek() >= 18 && item.pohlavi === "Žena")

console.log(osoby)