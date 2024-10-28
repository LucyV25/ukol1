const prijmeni = prompt("Zadej příjmení");
const jmeno = prompt("Zadej křestní jméno");
const castJmena = jmeno.trim().slice(0, 3).toLowerCase();
const castPrijmeni = prijmeni.trim().slice(0, 5).toLowerCase();
document.body.innerHTML += `<p>Tvůj email je: ${castPrijmeni}${castJmena}@fit.cvut.cz</p>`;