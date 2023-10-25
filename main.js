
const nome = prompt("inserisci il tuo nome","Nome");
const cognome = prompt("inserisci il tuo cognome","Cognome")
const colore = prompt("inserisci il tuo colore preferito","Colore")


document.getElementById("pwd").innerHTML = `la tua password è ${nome}${cognome}${colore}#25`