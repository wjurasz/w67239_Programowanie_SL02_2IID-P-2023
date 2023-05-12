// Zadanie 1. Stwórz trzy przyciski, po kliknięciu każdego z nich, zmień kolor tła tylko
// klikniętego przycisku. Jeśli któryś z przycisków już ma zmienione tło, to przy kliknięciu
// innego przycisku jego kolor tła powinien powrócić do pierwotnego stanu, a kolor klikniętego
// przycisku powinien się zmienić.

const btns = document.querySelectorAll("button");

let activation;
for (let i = 0; i < btns.length; i++) {
  const btn = btns[i];
  btn.addEventListener("click", () => {
    if (activation) {
      activation.classList.remove("button");
    }

    btn.classList.add("button");
    activation = btn;
  });
}
// Zadanie 2. Utwórz formularz rejestracyjny zawierający pola odpowiednie pola jak np.:
// • Imię
// • Nazwisko
// • Email
// • Hasło
// • Powtórz hasło
// • Przycisk zapisz
// Każde pole powinno być walidowane przy użyciu JS. Walidacja powinna następować
// zarówno przed wysłaniem formularza jak i w trakcie wprowadzania wartości

// Zadanie 3. Stwórz obiekt reprezentujący samochód zawierający takie dane jak marka, model,
// rok produkcji, kolor, prędkość. Następnie napisz metody zwiększające i zmniejszające
// prędkość samochodu o określoną wartość oraz metodę zwracającą informacje o samochodzie
// w formacie "Marka Model (Rok produkcji), Kolor: kolor, Prędkość: prędkość".
class Car {
  constructor(brand, model, yearofdistribiution, colour, vmax) {
    this.brand = brand;
    this.model = model;
    this.yearofdistribiution = yearofdistribiution;
    this.colour = colour;
    this.vmax = vmax;
  }
  increasespeed() {
    return (this.vmax += 10);
  }
  decreasespeed() {
    return (this.vmax -= 20);
  }
  carinfo() {
    return (
      this.brand +
      " " +
      this.model +
      " " +
      this.yearofdistribiution +
      " " +
      this.colour +
      " " +
      this.vmax +
      " "
    );
  }
  howoldcar() {
    return Date() - this.yearofdistribiution;
  }
}
const car = new Car("Audi", "A2", 2002, "silver", 50);
console.log(car.carinfo());

car.increasespeed();
car.increasespeed();

console.log(car.carinfo());
car.decreasespeed();

console.log(car.carinfo());
console.log(car.howoldcar());

// Zadanie 4. Dodaj dwa pola tekstowe oraz przycisk. Dodaj tabelę z dwoma kolumnami Imię i
// Nazwisko. Po kliknięciu przycisku wartość pól tekstowych powinna zostać dodana do tabeli.
function dodajDoTabeli() {
  var imie = document.getElementById("imie").value;
  var nazwisko = document.getElementById("nazwisko").value;
  var tabela = document.getElementById("tabela");
  var nowyWiersz = tabela.insertRow();
  var komorkaImie = nowyWiersz.insertCell();
  var komorkaNazwisko = nowyWiersz.insertCell();
  komorkaImie.innerHTML = imie;
  komorkaNazwisko.innerHTML = nazwisko;
  console.log(imie);
  console.log(nazwisko);
}
