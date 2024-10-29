// Task 1 

// class Auto {
//     constructor ( name , model , year ) {
//         this.name = name 
//         this.model = model 
//         this.year = year 
//     }
// }

// class SuperCar extends Auto {
//     constructor ( name , model , year , speed ) {
//         super ( name , model , year ) 
//         this.speed = speed 
//     }
// }


// let NewNissan = new Auto ( "Nissan" , "Skyline" , "1990" )
// let NewToyota = new Auto ( "Toyota" , "Supra" , "1990")
// let NewMazda = new SuperCar ( "Mazda" , "RX-8" , "1990" , 400)

// console.log(NewNissan);
// console.log(NewToyota);
// console.log(NewMazda);

// Task 2 

// let cnt = new Date().getFullYear()

// class Person {
//     constructor ( name , surname , age ) {
//         this . name = name 
//         this . surname = surname 
//         this . age = age 
//     }
// }

// class Year extends Person{
//     constructor ( name , surname , age , born ) {
//         super ( name , surname , age )
//         this.born = cnt - born 
//     }
// }

// let Person1 = new Year ( "Peter" , "Parker" , "22" , 22 )
// let Person2 = new Year ( "Miles" , "Morales" , "18" , 18 )
// let Person3 = new Year ( "Migel" , "Ohar" , "25" , 25 )

// console.log( Person1 );
// console.log( Person2 );
// console.log( Person3 );

// Task 3 

// class Auto { 
//     #data = new Date().getTime()
//     constructor ( name , model , year ){
//         this.name = name 
//         this.model = model 
//         this.year = year
//     }

//     time () {
//         return this.#data
//     }
// }

// class Hypper extends Auto {
//     #data = new Date().getTime()

//     constructor (  name , model , year ) {
//         this.name = name 
//         this.model = model 
//         this.year = year 
//     }
// }

// let Porsche911 = new Auto ( "Toyota" , "Supra Mk4" , "1990")

// console.log(Porsche911);