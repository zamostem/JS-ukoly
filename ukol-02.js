const pocet = prompt("Počet kusů:");
let cenaKs = 0;

if (pocet < 50) {
    cenaKs = 300;
} else if (pocet >= 50 && pocet < 200) {
    cenaKs = 250;
} else if (pocet >= 200 && pocet < 500) {
    cenaKs = 200;
} else if (pocet >= 500 && pocet < 1000) {
    cenaKs = 150;
} else if (pocet >= 1000) {
    cenaKs = 120;
};

const cenaCelkem = cenaKs * pocet;

document.body.innerHTML += `<p>Celková cena objednávky: ${cenaCelkem} Kč.</p>`;