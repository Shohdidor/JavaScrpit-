// Pro

// class Shapes { 
//     calculateArea () {
//         return 0
//     }
// }


// class Circle extends Shapes {
//     constructor(radius) {
//         super ()
//         this . radius = radius
//     }
//     calculateArea() {
//     return Math.PI * this.radius * this.radius
// }
// }


// class Square extends Shapes {
//     constructor ( side ) {
//         super ()
//         this.side = side 
//     }
//     calculateArea(){
//         return this.side * this.side 
//     }
// }


// let circle = new Circle ( 10 )
// let square = new Square ( 4 )


// console.log(circle);
// console.log(square);



// ---------------------------------------------------------

// Abstaction - чизе ки номуайянай 
// Например Мошин неки номаьлум кадом мошина мо гуфтестем 


// class Transport {
//     constructor ( name , type ) {
//         this . name = name 
//         this . type = type 
//     }
//     move (){
//         return `${this.name} is moving`
//     }
// }

// class Car extends Transport {
//     constructor ( name , fuelType ) {
//         super ( name , "Car")
//         this.fuelType = fuelType
//     }

//     drive () {
//         return `${this.name} is driving on ${this.fuelType} fuel`
//     }
// }

// const myCar = new Car ("My Car" , "gasoline")

// console.log(myCar.move());
// console.log(myCar.drive());



// class Player {
//     constructor ( name , age , heigth , wiegth ) {
//         this . name = name 
//         this . age = age 
//         this . heigth = heigth 
//         this . wiegth = wiegth

//     }

//     getName () {
//         return `Hello I m ${this.name}`
//     }
//     getAge () {
//         return `I m ${this.age} years old`
//     }
//     getHeigth () {
//         return `My heigth ${this.heigth}`
//     }
//     getWiegth () {
//         return `and wiegth ${this.wiegth}kg`
//     }
// }

// let pl = new Player ("Peter Parker" , 22 , 188 , 75)

// console.log(pl.getName());
// console.log(pl.getAge());
// console.log(pl.getHeigth());
// console.log(pl.getWiegth());


// console.log(pl);