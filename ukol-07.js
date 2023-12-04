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