"use strict"

// Objects
var šalis1 = {
    šaliesPavadinimas: "Ispanija",
    plotas: "505 990 km²",
    gyventojuSkaičius: "47 450 795 gyventojai"
}

var šalis2 = {
    šaliesPavadinimas: "Jungtinė Karalystė",
    plotas: "242 495 km²",
    gyventojuSkaičius: "67 886 004 gyventojai"
}

var šalis3 = {
    šaliesPavadinimas: "Vokietija",
    plotas: "357 022 km²",
    gyventojuSkaičius: "83 695 430 gyventojai"
}

var šalis4 = {
    šaliesPavadinimas: "Norvegija",
    plotas: "385 207 km²",
    gyventojuSkaičius: "5 488 984 gyventojai"
}

var šalis5 = {
    šaliesPavadinimas: "Nyderlandai",
    plotas: "41 865 km²",
    gyventojuSkaičius: "17 718 800 gyventojai"
}

console.log(šalis1.šaliesPavadinimas, šalis1.plotas, šalis1.gyventojuSkaičius)
console.log(šalis2.šaliesPavadinimas, šalis2.plotas, šalis2.gyventojuSkaičius)
console.log(šalis3.šaliesPavadinimas, šalis3.plotas, šalis3.gyventojuSkaičius)
console.log(šalis4.šaliesPavadinimas, šalis4.plotas, šalis4.gyventojuSkaičius)
console.log(šalis5.šaliesPavadinimas, šalis5.plotas, šalis5.gyventojuSkaičius)
;
var šalis1 = 505990 * 1000000 + " m²"
var šalis2 = 242495 * 1000000 + " m²"
var šalis3 = 357022 * 1000000 + " m²"
var šalis4 = 385207 * 1000000 + " m²"
var šalis5 =  41865 * 1000000 + " m²"

console.log(šalis1)
console.log(šalis2)
console.log(šalis3)
console.log(šalis4)
console.log(šalis5)

var users = [
    {šaliesPavadinimas: "Ispanija, ", plotas: "505990 km², ", gyventojuSkaičius: "47450795 gyventojai."},

    {šaliesPavadinimas: "Jungtinė Karalystė, ", plotas: "242495 km², ", gyventojuSkaičius: "67886004 gyventojai."},

    {šaliesPavadinimas: "Vokietija, ", plotas: "357022 km², ", gyventojuSkaičius: "83695430 gyventojai."},

    {šaliesPavadinimas: "Norvegija, ", plotas: "385207 km², ", gyventojuSkaičius: "5488984 gyventojai."},

    {šaliesPavadinimas: "Nyderlandai, ", plotas: "41865 km², ", gyventojuSkaičius: "17718800 gyventojai."}
]

for(var i = 0; i < users.length; i++) {
    console.log("Šalis: " + users[i].šaliesPavadinimas + users[i].plotas + users[i].gyventojuSkaičius)
}


