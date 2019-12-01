function Osoba(imięP, nazwiskoP) {
    this.imie = imięP;
    this.nazwisko = nazwiskoP;

    this.przedstawSie = function () {
        console.log('nazywam się '+this.imie + ' '+ this.nazwisko);
    }
}
let osoba = new Osoba('Jan','Kowalski');
osoba.przedstawSie();