const salary = (wage, hours, days) => {
    const mySalary = wage * hours * days
    document.body.innerHTML += `<p>Hrubá měsíční mzda: ${mySalary} Kč</p>`
    return mySalary
}

const result = salary(450, 8, 21)

const taxed = (amount, tax) => {
    document.body.innerHTML += `<p>Měsíční mzda po zdanění: ${amount - amount * tax} Kč</p>`
}

taxed(result, 0.15)

