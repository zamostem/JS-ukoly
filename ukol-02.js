const pocet = prompt("Počet kusů:");

const cenaKs = "";
if (pocet < 50) {
    cenaKs = 300;
} else if (pocet >= 50) {
    cenaKs = 250;
} else if (pocet >= 200) {
    cenaKs = 200;
} else if (pocet >= 500) {
    cenaKs = 150;
} else if (pocet >= 1000) {
    cenaKs = 120;
};

document.body.innerHTML += `<p>Celková cena objednávky: ${cenaKs * pocet} Kč.</p>`