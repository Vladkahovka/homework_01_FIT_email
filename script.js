/*FIT e-mail
Vytvořte e-mailovou adresu pro studenty FIT ČVUT.
Pokud se přihlásíte jako student například na Fakultu Informačních Technologí ČVUT, bude vám informačním systémem automaticky 
přidělen e-mail, který se vytvoří z vašeho jména a příjmení. Z vašeho příjmení se vezme pět prvních znaků a z vašeho křestního
jména první tři. Výsledek se převede na malá písmena a připojí se doména fit.cvut.cz. Pro jméno Jana Procházková tak vznikne
adresa prochjan@fit.cvut.cz.

Vytvořte webovou stránku, která požádá uživatele nejdříve o jeho křestní jméno a pak příjmení, obojí bez diakritiky.
Pomocí metody trim zajistěte, že ve jméně ani příjmení nebudou na začátku ani na konci žádné bílé znaky.
Pomocí metody slice vyřízněte ze jména i příjmení příslušné části.
Pomocí interpolace řetězců sestavte výslednou adresu a vypište ji do stránky.
*/

const jmeno = prompt("Zadej krestni jmeno bez diakritiky")
const prijmeni = prompt("Zadej prijmeni bez diakritiky")
const orezaneJmeno = jmeno.trim()
const orezanePrijmeni = prijmeni.trim()
const zmenseneJmeno = orezaneJmeno.toLowerCase()
const zmensenePrijmeni = orezanePrijmeni.toLowerCase()
const kratkeJmeno = zmenseneJmeno.slice(0, 3)
const kratkePrijmeni = zmensenePrijmeni.slice(0, 5)


const email = {
    surname: kratkePrijmeni, 
    tecka: ".",
    name: kratkeJmeno,
    domain: "@fit.cvut.cz",
}

const student = `
<h1> E-mail studenta:</h1>
 ${email.surname}${email.tecka}${email.name}${email.domain} 
`
document.body.innerHTML += student