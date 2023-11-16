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
document.body.innerHTML += `<p>day: ${result.day}, month: ${result.month}, year: ${result.year}</p>`
