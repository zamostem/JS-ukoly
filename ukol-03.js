const date = prompt("Zadej datum ve formátu DD.MM.YYYY:");

/* let parsedDate = {
    day: "",
    month: "",
    year: "",
  };
  */

const parseDate = (date) => {
    parsedDate = {
        day: date.slice(0, 2),
        month: date.slice(3, 5),
        year: date.slice(6, 10),
    }
};

// document.body.innerHTML += `<p>day: ${day}, month: ${month}, year: ${year}</p>`
document.body.innerHTML = parseDate("22.02.1990")