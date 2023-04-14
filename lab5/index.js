// ZAD 1
let get_variables = prompt("Podaj wiek: ")
console.log(get_variables)
if (get_variables >=18){
    window.alert("pełnoletni")
}
else{
    window.alert("niepełnoletni")
}
// ZAD 2
let temperature=prompt("Podaj temperature w celsjuszu: ")
let farenheit = temperature*2+32
console.log(farenheit)
//ZAD 3
let tablica=[1,1,5,7,435,756,23,64,2]
// sumowanie wartosci
const sum = tablica.reduce((partialSum,a ) => partialSum +a,0);
console.log(tablica)
console.log(sum); 
// znajdowanie l parzystch
tablica.forEach(function(liczba){
    if (liczba % 2 == 0){
        console.log(liczba);
    
    }
})
// dodawnie nr albumu
tablica.forEach(function(number){
     console.log(number*3)
})
tablica.push(67239);
console.log(tablica)
const findelement = tablica.find(element => element == 67239);
console.log(tablica.indexOf(67239))

// Srednia 
const theaverage = sum/ tablica.length
console.log(theaverage)

// najwieksza liczba
console.log(Math.max(...tablica));
// zliczanie ilosci
const count = tablica.reduce((acc, val) =>{
    if (val == 1){
        return acc +1;
    }   else{
        return acc;
    }
},0);
console.log(count);
// ZAD 4
const fibbonaci= [0,1];
for (let i=2 ; i<100;  i++){
    fibbonaci[i] = fibbonaci[i-1] + fibbonaci[i-2];
}
console.log(fibbonaci);