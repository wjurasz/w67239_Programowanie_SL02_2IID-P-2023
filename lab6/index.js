// zad 1

function factorial(n) {
    let wynik = 1;
    for (let i = 2; i <= n; i++) {
      wynik *= i;
    }
    return wynik;
}
console.log(factorial(5))

//  zad 2
const btns = document.querySelectorAll("button");

let activation;
for(let i = 0; i< btns.length; i++){
    const btn = btns[i];
    btn.addEventListener("click",()=>{
        if (activation){
            activation.classList.remove("button");
        }
        
        btn.classList.add("button");
        activation=btn;
    });
}
//  zad3 
const item = document.querySelector("p")
if(item.style.display == "none"){
    item.style.display = "block";
}
    else{
        item.style.display = "none";
    }
console.log(item);

// zad4 
const teskt = document.querySelector("tekst")