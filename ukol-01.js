const firstName = prompt("Zadejte křestní jméno bez diakritiky:").trim();
const surname = prompt("Zadejte příjmení bez diakritiky:").trim();

const email = {
    userFirstName: firstName.slice(0, 3),
    userSurname: surname.slice(0, 5),
};

document.body.innerHTML += `<p> ${(email.userSurname + email.userFirstName).toLowerCase()}@fit.cvut.cz</p>`;