/* parsování data
Bez použití knihovny Day.js napište funkci parseDate, která na vstupu obdrží řetězec obsahující datum ve formátu DD.MM.YYYY a vrátí objekt s jednotlivýnu částmi zadaného data. Příklad použití:

parseDate('12.03.2015'); // → { day: 12, month: 3, year: 2015 }
parseDate('06.04.2021'); // → { day: 6, month: 4, year: 2021 }
*/

const parseDate = () => {
    const inputDate = prompt("Zadej datum ve formátu DD.MM.YYYY:");
    const date = {
        day: inputDate.slice(0, 2),
        month: inputDate.slice(3, 5),
        year: inputDate.slice(6, 10),
    };
    return date;
};

const result = parseDate();
document.body.innerHTML += `<p>day: ${Number(result.day)}, month: ${Number(result.month)}, year: ${Number(result.year)}</p>`
