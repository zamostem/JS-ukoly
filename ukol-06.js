/*
Napište funkci fillcut, která jako svůj první parametr str očekává řetězec a jako druhý parametr len kladné celé číslo. Úkolem funkce je oříznout nebo prodloužit zadaný řetězec tak, aby měl délku přesně len.
Pokud je vstupní řetězec delší než len, tak funkce odřízne jeho konec a vrátí výsledek.
Pokud je vstupní řetězec kratší než len, tak jej doplní od začátku znakem tečky a vrátí výsledek.
Pokud je vstupní řetězec dlouhý přesně len, funkce jej vrátí beze změny.
Příklad použití:

document.body.innerHTML += fillcut('petr', 8) + '<br>'; // vypíše „....petr“
document.body.innerHTML += fillcut('petr', 3) + '<br>'; // vypíše „pet“
document.body.innerHTML += fillcut('petr', 4) + '<br>'; // vypíše „petr“
*/

const fillcut = (str, len) => {
    if (str.length > len) {
        document.body.innerHTML += `<p>${str.slice(0, len)}`
    } else if (str.length < len) {
        document.body.innerHTML += `<p>${str.padStart(len, ".")}`
    } else {
        document.body.innerHTML += str
    }
}

fillcut("Praha", 3)
fillcut("Praha", 10)
fillcut("Praha", 5)