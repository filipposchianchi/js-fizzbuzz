// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero
// e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

for(var i =1; i < 101; i++) {
    var stampa;
    if(i % 3 === 0 && i % 5 === 0) {
        stampa = "FizzBuzz"
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        stampa = "Fizz"
        console.log("Fizz");
    } else if (i % 5 === 0 ) {
        stampa = "Buzz"
        console.log("Buzz");
    }
    else {
        stampa = i
        console.log(i);
    }

    document.getElementById("lista").innerHTML += "<li>" + stampa +  "</li>";
}