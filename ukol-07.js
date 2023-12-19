/* catering
Mějme tři cateringové společnosti dodávající občerstvení na různé akce. Jsou to

Just Food: Dodává levné jídlo vyrobené z nepříliš kvalitních surovin.

Your Mama: Dodává středně drahé jídlo vyrobené z lepších surovin.

Flavour Haven: Dodává drahé jídlo z kvalitních surovin.

Napište pro každou z těcho společností funkci s jedním parametrem, který udává, pro kolik lidí se catering objednává. Funkce pak vrátí řetězec obsahující zprávu o tom že catering byl dodán a za jakou cenu. Například

Catering od Flavour Haven pro 100 lidí za 300000 Kč

Vyzkoušjte si vaše funkce v konzoli. Poté napište funkci createEvent, která představuje vytvoření nějaké události s cateringem. Funkce na vstupu obdrží název události, počet lidí a funkci, pomocí které se má provést catering. Funkce createEvent pak vrátí zprávu ve smyslu

Událost Inaugurace prezidenta s catering od Flavour Haven pro 100 lidí za 300000 Kč
*/

const justFood = (guests) => {
    const price = 700
    return `catering od Just Food pro ${guests} lidí za ${guests * price} Kč`
}

const yourMama = (guests) => {
    const price = 1200
    return `catering od Your Mama pro ${guests} lidí za ${guests * price} Kč`
}

const flavourHaven = (guests) => {
    const price = 2500
    return `catering od Flavour Haven pro ${guests} lidí za ${guests * price} Kč`
}

console.log(justFood(100))
console.log(yourMama(100))
console.log(flavourHaven(100))

const createEvent = (eventName, guests, cateringCompany) => {
    document.body.innerHTML = `Událost ${eventName} s ${cateringCompany(guests)}.`
}

createEvent("Otevření sportovní haly", 120, yourMama)