function pierwszaFunkcja() {
    console.log('jakas wartosc');
}
// pierwszaFunkcja();
function wypiszTekst(parametr)
{
    console.log(parametr);
}
// wypiszTekst('parametr123');

function suma(a,b){
    console.log('Suma :')
let sum =a+b;
    console.log(sum);
}
// suma(1,5);

function suma2(a,b) {
    return a+b;
}
// console.log(suma2(4,4));

let a = 5;

function modyfikuj(liczba) {
    liczba = 1;
}
console.log(a);
modyfikuj(a);
console.log(a);

let array=['jeden','dwa','trzy'];
function modyfukuj2(tablica) {
    tablica[0] = 'nowa wartosc';
}
console.log(array);
modyfukuj2(array);
console.log(array);