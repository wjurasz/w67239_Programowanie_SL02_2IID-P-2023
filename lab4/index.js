class Book{
    constructor(title,author,year){
        this.title=title;
        this.author=author;
        this.year=year;
    }
    allInformation(){
        return this.title+" " +this.author+" "+ this.year+" ";
    }
}


const Pan_Tadeusz = new Book("Pan Tadeusz", "Adam Mickiewicz","1834");
console.log(Pan_Tadeusz.allInformation());

class Student{
    constructor(imie,nazwisko,oceny){
        this.imie=imie;
        this.nazwisko=nazwisko;
        this.oceny=oceny;
    }
        
    studentinfo(){
        return this.imie+" "+this.nazwisko+" "+this.oceny+" ";
    }
}


const Wojciech = new Student("Wojciech","Jurasz","5,4,3");
const oceny = [5,4,3]
const sum = oceny.reduce((a, b ) => a +b, 0);
const average = sum / oceny.length;
console.log(Wojciech.studentinfo(), average);

class Car{
    constructor(brand,model,yearofdistribiution,colour,vmax){
        this.brand=brand;
        this.model=model;
        this.yearofdistribiution=yearofdistribiution;
        this.colour=colour;
        this.vmax=vmax;
    }
increasespeed(){
    return this.vmax += 10

}
decreasespeed(){
    return this.vmax -=20
}
 carinfo(){
    return this.brand+" "+this.model+" "+this.yearofdistribiution+" "+this.colour+" "+this.vmax+" ";
}
howoldcar(){
    return Date() - this.yearofdistribiution
}
}
const car = new Car("Audi","A2",2002,"silver",50)
console.log(car.carinfo())
car.increasespeed()
car.increasespeed()
console.log(car.carinfo())
car.decreasespeed()
console.log(car.carinfo())
console.log(car.howoldcar())
