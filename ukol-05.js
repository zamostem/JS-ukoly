/* výplata
Vytvořte funkci salary se třemi parametry

wage - hrubá mzda v korunách za hodinu
hours - kolik hodin denně průměrně pracujete
days - kolik dní v měsící průměrně pracujete
Funkce spočítá vaši hrubou měsíční mzdu v celých korunách.

Dále vytvořte funkci taxed, která na vstupu obdrží částku a procento zdanění, a vrátí částku v celých korunách zdaněnou podle zadaných procent.

Použítím funkcí salary a taxed spočítejte svoji měsíční mzdu po 15% zdanění.
*/

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

