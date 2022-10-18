// CHIEDERE ALL'UTENTE QUANTI ANNI HA, CALCOLARE ANNO DI NASCITA, SCRIVERE 
// UNA FRASE "SEI NATO NEL...."

/*
- chiedere anni
    -utilizzare la funzione prompt () per chiedere
    - salvare il valore in una variabile


- calcolare l'anno di nascita
    - utilizzare l'anno corrente - età

- scrivere la frase:
    -scrivere la frase in un document.getElementById().innerHTML


*/

let annoDiNascita = prompt('Scrivimi quanti anni hai:');
console.log(annoDiNascita);

let annoCorrente = 2022

let annoNascita = annoCorrente - annoDiNascita;
console.log(annoNascita);

let frase = `il tuo anno di nascita è ${annoNascita}`
// let frase2 = `il tuo anno di nascita è =` + annoNascita

document.getElementById(`fraseJavascript`).innerHTML =
`il tuo anno di nascita è ${annoCorrente - annoDiNascita}`





// Chiedi all'utente il suo nome,
//     -prompt(`chiedere il nome:...`)
// poi chiedi il suo cognome,
//     -prompt (`chiedere il cognome:.....`)
// poi chiedi il suo colore preferito
//     -prompt (`chiedere il colore:...`)
// Infine scrivi sulla pagina "la tua password è nomecognomepreferito21"
//     - il 21 è un numero a vostra SpeechRecognitionAlternative
//     - getElementById().innerHTML = "...valore password..."
//    `la tua password è: ${nome}${colore}{}`
