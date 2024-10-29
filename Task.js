// Task 1 

const { FileEnumerator } = require("eslint/use-at-your-own-risk");

// function main ( a , b ){
//     return b.concat ( ", " ,  a )
// }
// console.log( main ( "First" , "Last" ) );

// Task 2 
// function main ( a ){
//     return a.length%2==0
// }
// console.log( main ( "apples" ) );
// console.log( main ( "pears" ) );
// console.log( main ( "cherry" ) );

// Task 3 

// function main ( a , b ){
//     let res = a .split (" ")
//     let sum = []
//     for ( let i = 0 ; i < res . length ; i ++ ){
//         if ( res [ i ].includes ( b )){
//             let boom = res [ i ]
//             let cnt = ""
//             for ( let i = boom.length -1 ; i >= 0 ; i -- ){
//                 cnt+= boom [ i ]
//             }
//             sum.push  ( cnt )
//         }
//         else {
//             sum.push ( res [ i ])
//         }
//     }
//     let jj = ""
//      sum.filter (( elem )=> {
//         return jj += elem + " "
//     })
//     return jj.slice(0,-1)
// }
// console.log( main ("word searches are super fun" , "s" ) );
// console.log( main ("first man to walk on the moon","m" ) );

// Task 4

// function main ( a ){
//     let res = a.split(", ")
//     let cnt = 1
//     res.filter (( elem ) => {
//         return  cnt *= elem 
//     })
//     return cnt
// }
// console.log( main ( "2, 3") );
// console.log( main ( "1, 2, 3, 4") );
// console.log( main ( "54, 75, 453, 0") );

// Task 5

// function main ( a ){
//     let sum = "Burp" , Boom = ""
//     let res = sum.split ("")
//     for ( let i = 0 ; i < res . length ; i ++ ){
//         if ( res [ i ] == "r" ){
//            Boom+= res [ i ].repeat ( a )
//         }
//         else {
//             Boom += res [ i ]
//         }
//     }
//     return Boom
// }
// console.log( main ( 3 ) );
// console.log( main ( 5 ) );
// console.log( main ( 9 ) );

// Task 6 

// function main ( a ){
//     let cnt =  0
//     let res = a.split ("")
//     for ( let i = 0 ; i < res.length ; i ++ ){
//         if ( res [ i ] == "a" || res [ i ] == "A" || res [ i ] == "e" || res [ i ] == "E" || res [ i ] == "i" || res [ i ] == "I" || res [ i ] == "o" || res [ i ] == "O" || res [ i ] == "u" || res [ i ] == "U" ){
//             cnt ++ 
//         }
//     }
//     return cnt
// }
// console.log( main ( "apple" ) );
// console.log( main ( "cheesecake" ) );
// console.log( main ( "" ) );

// Task 7

// function main ( a ) {
//     let res = 0
//     for ( let i = a ; i > 0 ; i = Math.floor(i/10 ) ){
//         res += i % 10
//     }
//     return a % res == 0
// }
// console.log( main ( 209 ) ) ;
// console.log( main ( 41 ) ) ;
// console.log( main ( 12255 ) ) ;




// Task 8

// function main ( a , b ){
//     let res = [ 1 , 2 , 3 , 4 , 5 , 6 ]
//     for ( let i = 0 ; i < res . length ; i ++ ){
//         if ( res [ i ] + a == b){
//             return true
//         }
//     }
//     return false 
// }
// console.log( main ( 3 , 7 ) );
// console.log( main ( 1 , 9 ) );
// console.log( main ( 5 , 3 ) );

// Task 9

// function main ( a , b ) {
//     let sum = 0 
//     let chahor = ""
//     let dah = ""
//     let bist = ""
//     let penni = ""
//     for ( let i = 0 ; i < a.length ; i ++ ){
//         chahor = a [ i - 3 ] / 4 
//         dah = a [ i - 2 ]  / 10
//         bist = a [ i - 1 ] / 20
//         penni = a [ i ] / 100
//     }
//     return sum = chahor + dah + bist + penni >= b

// }
// console.log( main ( [ 2 , 100 , 0 , 0 ] , 14.11 ) );
// console.log( main ( [ 0 , 0 , 20 , 5 ] , 0.75 ) );
// console.log( main ( [ 30 , 40 , 20 , 5 ] , 12.55 ) );
// console.log( main ( [ 10 , 0 , 0 , 50 ] , 3.85 ) );
// console.log( main ( [ 1 , 0 , 5 , 219 ] , 19.99 ) );


// Task 10 

// function main ( a ){
//     let res = ""
//     if ( a == 0 ){
//         res += 1
//     }
//     for ( let i = a ; i > 0 ; i = Math.floor ( i / 10 ) ){
//         res += i % 10
//     }
//     return res.split("").length
// }
// console.log( main ( 1000 ));
// console.log( main ( 12 ));
// console.log( main ( 1234567890 ));
// console.log( main ( 0 ));

// Task 11

// function main ( a ){
//     let res = ""
//     a.filter ( ( elem ) => {
//         return res += elem 
//     })
//     let cnt = ""
//     let sum = res .split ( "" )
//     for ( let i = 0 ; i < sum . length ; i ++ ){
//         if ( sum [ i ] != "," ){
//             cnt+=sum[i]
//         }
//     }
//     return cnt.length
// }
// console.log( main ( [1, [ 2 , 3 ] ] ) );
// console.log( main ( [ 1, [ 2, [ 3, 4 ] ] ] ) );
// console.log( main ( [ 1, [ 2, [ 3, [ 4, [ 5, 6 ] ] ] ] ] ) );
// console.log( main ( [1, [ 2 ], 1, [ 2 ], 1 ] ) );

// Task 12 

// function main ( a ){
//     let res = []
//     for ( let i = 0 ; i < a.length; i ++ ){
//         if ( a [ i ].includes("1") || a [ i ].includes("2") || a [ i ].includes("3") || a [ i ].includes("4") ||a [ i ].includes("5") ||a [ i ].includes("6") ||a [ i ].includes("7") ||a [ i ].includes("8") ||a [ i ].includes("9") || a [ i ].includes("0") ){
//             res . push ( a [ i ] )
//         }
//     }
//     return res 
// }
// console.log( main ( [ "1a", "a", "2b", "b" ] ) );
// console.log( main ( [ "abc", "abc10"] ) ) ;
// console.log( main ( [ "abc", "ab10c", "a10bc", "bcd " ] ) );
// console.log( main ( [ "this is a test", "test1" ] ) );

// Task 13 

// function main ( a , b ){
//     let cnt = 0
//     if ( b % 2 != 0 ){
//         for ( let i = 0 ; i < a . length ; i ++ ) {
//             if ( a [ i ] % 2 != 0 ){
//                 cnt ++ 
//             }
//         }
//         return cnt 
//     }
    
//     if ( b % 2 == 0 ){
//         for ( let i = 0 ; i < a . length ; i ++ ) {
//             if ( a [ i ] % 2 == 0 && a [ i ] != 0){
//                 cnt ++ 
//             }
//         }
//         return cnt 
//     }

// }
// console.log( main ( [ 0 , 4 , 6 , 8 ] , 9 ) );
// console.log( main ( [ 0 , 4 , 6 , 8 ] , 12 ) );
// console.log( main ( [ 4 , 4 , 4 , 4 , 5 ] , 7 ) );
// console.log( main ( [ [ 4 , 4 ] , 8 ] ) );

// Task 14 

// function main ( a , b ){
//     let res = 0
//     b.filter (( elem ) => {
//         return res += elem
//     })
//     let cnt = 0
//     for ( let i = 0 ; i < a.length ; i ++ ) {
//         if ( a [ i ] == "M" ){
//             cnt += 100
//         }
//         if ( a [ i ] == "S" ){
//             cnt += 50
//         }
//         if ( a [ i ] == "L" ){
//             cnt += 200
//         }
//     }
//     return cnt > res
// }
// console.log( main ( [ "M" , "L" , "L" , "M" ] , [ 56 , 62 , 84 , 90 ] ) );
// console.log( main ( [ "S", "S", "S", "S", "L" ], [ 40, 50, 60, 70 , 80, 90, 200 ] ) );
// console.log( main ( [ "L", "L", "M" ], [ 56, 62, 84, 90 ] ) );

// Task 15 

// function main(a, b) {
//   let str = '';
//   let mn = Infinity;

//   for (const i in a) {
//     const sum = Math.abs   (a[i] - b);
//     if (sum < mn || (sum === mn && a[i] > a[str])) {
//       str = i;
//       mn = sum;
//     }
//   }

//   return str;
// }

// console.log(main({
//   "Chapter 1" : 1,
//   "Chapter 2" : 15,
//   "Chapter 3" : 37
// }, 10));


// Sass predprocecor in Css
// Minusoi React 1 ) Sostoyania 2 ) Seo 

// Task 16

// function oldest(a) {
//     let maxAge = -Infinity;
//     let mx = "";
//     for (let i in a) {
//         if (a[i] > maxAge) {
//             maxAge = a[i];
//             mx = i;
//         }    
//     }
//     return mx;
// }

// console.log(oldest({ Emma: 71, Jack: 45, Amy: 15, Ben: 29 }));
// console.log(oldest({ Max: 9, Josh: 13, Sam: 48, Anne: 33 }));
// console.log(oldest({ Ali: 80, Umed: 50, Safar: 100 }));

// Task 17

// function main ( a , b ){
//     let sumg = 0
//     let cnt = 0 
//     for ( let i = 0 ; i < a . length ; i ++ ){ 
//         a [ i ].filter (( elem ) => {
//             if ( elem . m > b ){
//                 return "Dead"
//             }
//             if ( elem . m == NaN ){
//                 cnt = b - 0
//                 sumg += elem.g
//             }
//             else {
//                 sumg += elem.g 
//                 cnt = b - elem . m 
//             }
//             if ( b == 0 ){
//                 return sumg
//             } 
//         })
//     }
//     return " Health " + cnt + " : Gold " + sumg
// }
// console.log( main ( [ [ { g: 0, m: 3 } ] ] , 6 ) );
// console.log( main ( [ [ { g : 6 , m : 2 } ] ] , 5 ) );
// console.log( main ( [ [ { g : 5 } ] ] , 10 ) );

// console.log( main ( [
//     [{ g: 5 }, { g: 0 }, { g: 8 }],
//     [{ g: 4, m: 5 }, { g: 7 }, { g: 7, m: 4 }],
//     [{ g: 1 }, { g: 5, m: 4 }, { g: 0 }],
//     [{ g: 1, m: 4 }, { g: 0 }, { g: 0 }]
//   ] , 10 ) );


// Task18

// function Task(obj){
//     let arr=[]
//     for(let key in obj)
//     {
//         let res = obj [ key ]
//         arr.push(obj[key])
//     }

//   return arr;

// }
// console.log(Task({a:"Softclub"}));
// console.log(Task({a:1 , b : 2 }));
// console.log(Task({a : "20" }));


// Task 19 

// function main ( a , b ) { 
//     let res = Object . keys( a ) , res2 = Object . values ( a )
//     let sum = Object . keys ( b ) , sum2 = Object . values ( b )
//     let boom = []
//     let bastik = []
//     for ( let i = 0 ; i < sum2.length ; i ++ ){
//         boom . push ( sum2 [ i ])
//     }
//     for ( let i = 0 ; i < res2.length ; i ++ ){
//         bastik . push ( res2 [ i ])
//     }
    
//     if ( res.join ("") === sum.join ("")){
//         for ( let i = 0 ; i < res2 . length ; i ++ ) {
//             for ( let k = 0 ; k < sum2 . length ; k ++ ) {
//                 return res2 [ i ] == sum2 [ k ]
//             }   
//         }
//     }
//     return false
// }
// console.log( main ( { a : 1 , b : 2 } , { a : 1 , b : 2 } ) );
// console.log( main ( { a : 3 , b : 4 } , { a : 5 , b : "6" } ) );
// console.log( main ( { a : 1 , b : 2 , c : 3 } , { a : 1 , b : 2 } ) );

// Task 20 

// function main ( a ){
//     let cnt = 0 , cnt2 = 0 
//     let res = a.split(",")
//     let sum = ""
//     for ( let i = 0 ; i < res . length ; i ++ ){
//             sum += res [ i ]
//     }

//     for ( let i = 0 ; i < sum . length ; i ++ ) {
//         if ( sum [ i ] == "1" || sum [ i ] == "2" || sum [ i ] == "3" || sum [ i ] == "4" || sum [ i ] == "5" || sum [ i ] == "6" || sum [ i ] == "7" || sum [ i ] == "8" || sum [ i ] == "9" || sum [ i ] == "0" ){
//             cnt ++ 
//         }
//         if ( sum [ i ] != "1" && sum [ i ] != "2" && sum [ i ] != "3" && sum [ i ] != "4" && sum [ i ] != "5" && sum [ i ] != "6" && sum [ i ] != "7" && sum [ i ] != "8" && sum [ i ] != "9" && sum [ i ] != "0" && sum [ i ] != " " && sum [ i ] != "+" && sum [ i ] != "-" && sum [ i ] != "/" && sum [ i ] != "*" && sum [ i ] != "%"){
//             cnt2 ++ 
//         }
//     }
//     return {
//         letters : cnt2,
//         numbers : cnt 
//     }
// }
// console.log( main ( "Hello, World" ));
// console.log( main ( "Hello, World11" ));
// console.log( main ( "Java - Script" ));

// Task 21 

// function main ( a ){
//     let obj = {}
//     for ( let key in a ){
//         let values = a [ key ]
//         obj [ values ] = key 
//     }
//     return obj
// }
// console.log( main ( { a : 1 , b : 2 } ) );

// Task 22 

// function main ( a ){
//     let mx = -9999
//     a.filter (( elem ) =>{
//         if ( elem.age > mx ) {
//             mx = elem.age
//         }
//     })
//     let res = a . filter (( elem ) => {
//         if ( elem . age == mx ){
//             return elem 
//         }
//     })
//     return res 
// }
// console.log( main ( [ { name : "John", age : 22 } , { name: "Johnson" , age : 39 } ] ) );
// console.log( main ( [ { name : "John", age : 49 } , { name: "Johnson" , age : 17 } ] ) );

// Task 23 

// function main ( a ) { 
//     let res = Object . values ( a )
//     let sum = ""
//     for ( let i = 0 ; i < res . length ; i ++ ) {
//      sum += res [ i ] + " "
//     }
//     return sum.split (" ").includes ( "undefined" )

// }
// console.log( main ( { name: undefined , age : 11 } ) );
// console.log( main ( { name: false , age : 11 } ) );
// console.log( main ( { name: "john" , age : 11 } ) );

// Task 24 

// function main ( a ) {
//     let res = Object . values ( a )
//     for ( let i = 0 ; i < res . length ; i ++ ) {
//         if ( typeof res [ i ] == "object" ){
//             return true
//         }
//     }
//     return false;
// }
// console.log( main ( { name: "John", age: [1, 2, 3] } ) );
// console.log( main ( { name: "John", age: 14 } ) );
// console.log( main ( { name: "John", age: [ { a : 1 , b : 2 } ] } ) );

// Task 25 


// function main ( a ) {
//     let res = Object . values ( a )
//     let cnt = 0 
//     for ( let i = 0 ; i < res . length ; i ++ ) {
//         if ( typeof res [ i ] == "number" ) {
//             cnt += res [ i ]
//         } 
//     } 
//     return cnt 
// }
// console.log( main ( { a : "dsadsa" , b : 123 , c : 345 } ) ) 
// console.log( main ( { a : true , b : 4 , c : 5 , d: 5 } ) ) 
// console.log( main ( { a : 10 } ) ) 

// Task 26

// function main ( a ){
//     let res = Object.values ( a ) 
//     return res . length 
// }

// console.log( main ( { a : "dsadsa" , b : 123 , c : 345 } ) ) 
// console.log( main ( { a : true , b : 4 , c : 5 , d: 5 } ) ) 
// console.log( main ( { a : 10 } ) ) 


// function main ( a ){
//     for ( let i = 0 ; i < a . length ; i ++ ) {
//         console.log(a [ i ]);
//         if ( i % 2 == 0 ) {
//             console.log( i );
//         }
//     }
// }
// console.log( main ( 5 ));

// Task 27

// function main ( a ) { 
//     let cnt1 = 0 , cnt2 = []
//     for ( let i = 0 ; i < a . length ; i ++ ) { 
//         if ( typeof a [ i ] != "string" ){
//             cnt1 += a [ i ]
//         }
//         if ( a [ i ] % 2 == 0 ) {
//             cnt2 . push ( a [ i ] )
//         }
//     }
//     return {
//         summa : cnt1 , 
//         event : cnt2 
//     }

// }
// console.log( main ( [ 1 , 2 , 3 , 4 , "5" , 6 , 7 , 8 , 9 , 23 , 27 ] ) );

// Task 28

// function main ( a ) {
//     let res = a.split(" ")
//     let sum = ""
//     let sumpro = ""
//     for ( let i = 0 ; i < res . length ; i ++ ) {
//         sum += res[i].slice( 0 , 1 )
//         if ( res [ i ].slice(1) == res [ i ].slice(1).toUpperCase(res[i]) )
//         {
//             return a
//         }
//     }
    
//     let cnt = sum.toUpperCase(sum).split("")
//     for ( let i = 0 ; i < res . length ; i ++ ) {
//         for ( let j = 0 ; j < cnt . length ; j ++ ) {
//             sumpro += cnt[j].concat(res[i].slice(1)) + " "
//         }
//     }
//     return sumpro.slice(0,32)
    
 
// }
// console.log( main ( "capitalize every word" ) );
// console.log( main ( "I Like Pizza" ) );
// console.log( main ( "PIZZA PIZZA PIZZA " ) );


// Task 29


// function main ( str ) {
//     let a = str.split("")
//     let sum = ""
//     for ( let i = 0 ; i < a . length ; i ++ ) {
//         if ( a [ i ] == +a [ i ] ){
//             sum+= " "
//         }
//         else {
//             sum+= a[ i ]
//         }
//     }
//     console.log(sum)
// }
// return main ( "Shohd1dor" )




// const [test , setTest] = useState([{question:"10 + 20" , a1:{correct:false , variant:"42"} , a2:{correct:true , variant:"30"} , a3:{correct:false , variant:"20"} , a4:{correct:false , variant:"30.5"}},
//     {question:"7 384 + 16 876" , a1:{correct:true , variant:"24 260"} , a2:{correct:false , variant:"25 868"} , a3:{correct:false , variant:"23 465"} , a4:{correct:false , variant:"35 690"}},
//     {question:"65 926 587 + 318 425 196 + 78 652 839" , a1:{correct:false , variant:"400 598 798"} , a2:{correct:false , variant:"562 085 986"} , a3:{correct:false , variant:"65 010 560"} , a4:{correct:true , variant:"462004622"}},
//     {question:"0 - 5" , a1:{correct:false , variant:"5"} , a2:{correct:false , variant:"0"} , a3:{correct:false , variant:"-6"} , a4:{correct:true , variant:"-5"}},
//     {question:"53 248 - 27 523" , a1:{correct:true , variant:"25 725"} , a2:{correct:false , variant:"24 261"} , a3:{correct:false , variant:"19 985"} , a4:{correct:false , variant:"26 965"}},
//     {question:"23 * 0" , a1:{correct:false , variant:"23"} , a2:{correct:true , variant:"0"} , a3:{correct:false , variant:"-23"} , a4:{correct:false , variant:"0.23"}},
//     {question:"12 * 1" , a1:{correct:true , variant:"12"} , a2:{correct:false , variant:"0"} , a3:{correct:false , variant:"-12"} , a4:{correct:false , variant:"24"}},
//     {question:"15 * 12" , a1:{correct:false , variant:"202"} , a2:{correct:false , variant:"150"} , a3:{correct:false , variant:"120"} , a4:{correct:true , variant:"180"}},
//     {question:"2 ÷ 8" , a1:{correct:false , variant:"4"} , a2:{correct:false , variant:"2"} , a3:{correct:true , variant:"0.25"} , a4:{correct:false , variant:"-4"}},
//     {question:"0 ÷ 625" , a1:{correct:true , variant:"0"} , a2:{correct:false , variant:"625"} , a3:{correct:false , variant:"-625"} , a4:{correct:false , variant:"-6.250"}},
//     {question:"583 762 000 ÷ 100" , a1:{correct:false , variant:"583.762.000"} , a2:{correct:false , variant:"256.688.220"} , a3:{correct:true , variant:"5.837.620"} , a4:{correct:false , variant:"-5.837.250"}},
//     {question:"1 645 ÷ 35" , a1:{correct:false , variant:"25"} , a2:{correct:false , variant:"86"} , a3:{correct:true , variant:"47"} , a4:{correct:false , variant:"35"}},
//     {question:"(-6) * (+3) * (-5) * (-2) * (-1)" , a1:{correct:false , variant:"-120"} , a2:{correct:false , variant:"86"} , a3:{correct:true , variant:"-180"} , a4:{correct:false , variant:"90"}},
//     {question:"-13 - 7 - (-9)" , a1:{correct:false , variant:"-20"} , a2:{correct:false , variant:"-10"} , a3:{correct:false , variant:"-8"} , a4:{correct:true , variant:"-11"}},
//     {question:"(−6)³" , a1:{correct:true , variant:"-216"} , a2:{correct:false , variant:"-6"} , a3:{correct:false , variant:"6"} , a4:{correct:false , variant:"16"}},
// ])


// Task 30 

// function main ( a ) {
//     let sum = a.split("")
//     return sum.includes("r")?console.log("yep"):console.log("nope")
// }   
// console.log( main ("Peter"));


// Task 31 

// function main ( a ) {
//     let sum = "" + a 
//     return +sum.at("0")
// }
// console.log( main ( 123456789 ));

// Task 32 

// function main ( a ) {
//     let b = "Parker"
//     let result = a.replace("Alexson" , b )
//     return result
// }
// console.log( main ("Peter Alexson"));

// Task 33 

// function main ( a ) {
//     return a.substring(4)
// }
// console.log( main ( "asbdpeter"));


// Task 34 

// function main ( a ) {
//     let cnt = 0
//     while ( a >= 0 ) {
//         a -= 100
//         if ( a != 0 ){
//             cnt ++ 
//         }
//     }
//     return cnt 
// }
// console.log( main ( 1705 ));
// console.log( main ( 1900 ));
// console.log( main ( 2000 ));

// Task 35 

// function main ( a , b , c ) {
//     if ( a < b && a < c ) {
//         return a 
//     }
//     if ( b < c ) {
//         return b 
//     }
//     return c 
// }
// console.log( main ( 150 , -10 , -5 ) );


// Task 36 

// function main ( a , b , c ){
//     let min = 9999 , max = -9999 
//     if ( a > b && a > c && a > max ) {
//         max = a 
//     }
//     if ( a < b && a < c && a < min ) {
//         min = a 
//     }
//     if ( b > c && b > max ) {
//         max = b
//     }
//     if ( b < c && b < min ) {
//         min = b
//     }
//     if ( c > max ) {
//         max = c
//     }
//     if ( c < min ) {
//         min = c
//     }
//     return "MaxNumber is " + max + " and MinNumber is " + min 
// }
// console.log( main ( 5 , 10 , -11 ) );


// Task 37 

// function main ( a , b ) {
//     let result = ""
//     for ( let i = 0 ; i < a . length ; i ++ ) {
//         if ( a [ i ] . grade == b ) {
//             result = a [ i ]
//         }
//         else { 
//             return {}
//         }
//     }
//     return result 
// }
// console.log( main ( [ { name : "Alice" , grade : "B" } , { name : "Peter Parker" , grade : "A" } , { name : "Goblin" , grade : "F" } ] , "A" ) );

// Task 38 

// function main ( a ) { 
//     let max = -9999 
//     a.filter (( elem ) => {
//         if ( elem . age > max ) {
//             return max = elem . age 
//         }
//     })
//     let res = a.filter (( elem ) => {
//         if ( elem . age >= max ) {
//             return max = elem.age 
//         }
//     })
//     return res 
// }
// console.log( main ( [ { name : "Peter Parker" , age : 17 } , { name : "Goblin" , age : 22 } , { name : "Stark" , age : 30 } ] ) );

// Task 39 

// function main ( a ) { 
//     console.log( a . user . details . address . city )
//     return a . user . details . address 
// }
// console.log( main ( { user : { details : { address : { city : "Brooklyn" } } } } ) );


// Task 40 

// function main ( a ) { 
//     let max = -9999 , min = 9999 
//     let res = a.filter (( elem ) => {
//         if ( elem . price > max ) {
//             return max = elem 
//         }
//         else if ( elem . price < min ) {
//             return min = elem  
//         }
//     })
//     return res 
// }
// console.log( main ( [  { name: 'Laptop', price: 1000, category: 'Electronics' },
//     { name: 'Shirt', price: 20, category: 'Clothing' },
//     { name: 'Phone', price: 500, category: 'Electronics' },
//     { name: 'Pants', price: 40, category: 'Clothing' }, ] ) );


// Task 41 

// function main ( a ) {
//     let res = a . filter (( elem ) => {
//         if ( elem . age >= 18 ) {
//             return elem
//         }
//     })
//     return res 
// }
// console.log( main ( [
//     { name: 'Alice', age: 17 },
//     { name: 'Bob', age: 25 },
//     { name: 'Charlie', age: 15 },
//     { name: 'David', age: 22 }, ] ) );


// Task 42 

// function main ( a ) {
//     let res = a . filter (( elem ) => {
//         return elem . price = elem . price * 0.9
//     })
//     return res 
// }
// console.log( main ( [
//     { name: 'Laptop', price: 1000 },
//     { name: 'Phone', price: 500 }, ] ) );


// a little explanation about symbols work

// let id = Symbol("Peter")
// let id2 = Symbol("Peter")
// console.log(id == id2 )   // output false


// a little information how call in array other array value 

// const res = [ "asd" , { 
//     name : "Peter"
// }, [ 1 , 2 , 3 ] , 3 ]
// console.log(res[2][[1]]);

// a little information how call in object array value 

// const res = {
//     name : [ 1 , 2 , 3]
// }
// console.log( res.name[0]);


// information how condition switch statment works 

// const fruits = "orange"
// switch ( fruits ) {
//     case "orange" : //  первый условия если мой фрукт это апельсин то
//         console.log("u'r fruit's it's orange ");         // ответ что твой фрукт это апельсин 
//         break ;                          // и всё закончить работать 
//         case "mandarin" :      // второй условия если мой фрукт мандарин то
//             console.log("u'r fruit's it's mandarin");                   // ответ что твой фрукт это мандарин
//             break ;                    // и всё закончить работать 
//             default :        // это последный условия после этого всё мы больше не можем добавить какую нибудь условию 
//             console.log( "not found" );             // ответ что не нашли 
// }




// const greet = function () {
//     console.log( "hello peter...");
// }
// console.log( greet() );


// Arrow function step 1 we can work without {} 


// let add = ( a , b ) => a + b 
// console.log( add ( 2 , 3 ) );

// Arrow function step 2 we can work with {}


// let add = ( a , b ) => { 
//    return a + b ;
// }
// console.log( add ( 2 , 3 ) );


// Version 1 

// function main ( a ){
//     let res = a.split("").reverse()
//     let sum = ""
//     for ( let i = 0 ; i < res . length ; i ++ ) {
//         sum += res [ i ]
//     }
//     return a == sum
// }
// console.log( main ( "hggh" ) );

// Version 2 

// function main ( a ){
//     let res = a.split("").reverse()
//     let sum = "" 
//     res.filter (( elem ) => {
//         return sum += elem
//     })
//     return a == sum
// }
// console.log( main ( "hggh" ) );
// console.log( main ( "123321" ) );


// Version 3

// function main ( a ){
//     if ( typeof(a) == "string" ){
//         let res = a.split("").reverse()
//         let sum = ""
//         for ( let i = 0 ; i < res . length ; i ++ ) {
//             sum += res [ i ]
//         }
//         return a == sum
//     }
//     else { 
//         let cnt = ""
//         for ( let i = a ; i > 0 ; i = Math.floor ( i / 10 ) ) {
//             cnt += i % 10 
//         }
//         return cnt == a  
//     }
// }
// console.log( main ( "hggh" ) );
// console.log( main ( 123321 ) );
// console.log( main ( 124321 ) );


// const a = "String"
// console.log(a.slice ( -1 ));




// function main ( a )  {
//     if ( a == 6 ) { return 1 } 
//     console.log( a );
    
//     return a * main ( a + 1 )
// }
// console.log( main ( 3 ));


// function main ( arr ) {
//     if ( arr . length === 0 ) {
//         return 0
//     }
//     let max = main ( arr . slice ( 1 ) )

//     return arr [ 0 ] > max ? arr [ 0 ] : max
    
// }
// console.log( main ( [ 10 , 6 , 3 , 4 , 5 ] ) ) ;


// function main ( a ) {
//     let res = a . split ("") . reverse()
//     let sum = ""
//     for ( let i = 0 ; i < res . length ; i ++ ) {
//         sum += res [ i ]
//     }
//     return sum 
// }
// console.log( main ( "peter" ) );



// function main ( a ) {
//     let cnt = 0 , res = a . split("")
//      res.map  (( elem ) => {
//         return elem == "a" || elem == "e" || elem == "i" || elem == "o" || elem == "u" ? cnt ++ : cnt 
//     })
//     return cnt 
// }
// console.log( main ( "Hello Peter..." ) );



// function main ( a ) { 
//     let res = a . split (" ")
//     res = res . map (( elem ) => {
//         return elem.at(0).toUpperCase().concat(elem.slice(1))
//     })
//     let sum = ""
//     for ( let i = 0 ; i < res . length ; i ++ ) {
//         sum += res [ i ] + " "
//     }
//     return sum . trim ()
// }
// console.log( main ( "hello peter magret" ) ) ;



// function main ( a ) {
//     function res ( b ) {
//         return a * b 
//     }
//     return res ( 5 )
// }
// console.log( main ( 10 ) );
// console.log( main ( 3 ) );


// let a2 = ""
// let a = "reverse"
// a.split("").reverse().map((elem) => {
//     return a2 += elem 
// })
// console.log( a2 );


// function main ( a ) {
//     let sum = "" 
//     a.split("").reverse().map((elem) => {
//         return sum += elem 
//     })
//     return sum 
// }
// console.log( main ( "hello" ) );



// Two way to sort Array 

// let arr = [ 10 , 2 , 8 , 4 , 5 ]

// console.log( arr . sort ());
// console.log( arr . sort (( a , b ) => a - b ));


// Destructuring 

// let a , b , res 
// [ a , b ] = [ 10 , 20 ] 
// console.log(a);
// console.log(b);
// [ a , b , ...res ] = [ 10 , 20 , 30 , 40 , 50 ]
// console.log(res);

// ---- Version 2 ---- //

// let a , b , res 
// [ a , b ] = [ 10 , 20 ] 
// console.log(a);
// console.log(b);
// [ a , b , c = 30 , ...res ] = [ 10 , 20 , 30 , 40 , 50 , 60 ]
// console.log(c);
// console.log(res);

// Object Destructuring 

// const user = {
//     name : "Peter" ,
//     age : 17 ,
//     job : "Photographer"
// }

// const { name , age , job , nickname = "Unknown" , city : location = "New York" } = user
// console.log( age );
// console.log( job );
// console.log( name );
// console.log( nickname );
// console.log( location );

// ---- Version 2 ---- //

// let obj = {
//     name : "Peter Parker",
//     age : 17 , 
//     city : "New-York",
//     job : "Photographer"
// }

// let name = obj.name 
// console.log( name );


// Spread 

// function main ( a , b , c ) {
//     return a + b + c 
// }
// let number = [ 10 , 20 , 30 ]
// console.log( main ( ...number ) ) ;


/// ---- Version 2 ---- ///

// let arr1 = [ 10 , 20 ]
// let arr2 = [ 30 , 40 ]
// let sum = [ ...arr1 , ...arr2  ]
// console.log( sum );


/// ---- Version 3 ---- ///

// let orginal = [ 1 , 2 , 3 , 4 ]
// let copy = [ ...orginal ]
// copy.unshift(0)
// console.log( orginal );  // --- didn't change --- //
// console.log( copy );
// console.log( copy == orginal );


/// ---- Version Object ---- ///

// let obj = { name : "Peter" }
// let obj2 = { age : 17 }
// let copy = { ...obj , ...obj2 , city : "New-York" }
// console.log( copy );



// function main ( a , b , c ) {
//     return a + b + c 
// }
// let number = [ 1 , 2 , 3 ]
// console.log( main ( ...number ) );

// Task 1 

// let arr1 = [ 1 , 2 , 3 ]
// let arr2 = [ 4 , 5 , 6 ]
// let sum = [ ...arr1 , ...arr2 ]
// console.log( sum );

// Task 2 

// function MaxFunc ( num ) {
//     return Math.max ( ...num )
// }

// let num = [ 10 , 20 , 5 , 30 , -100 ]
// let max = MaxFunc ( num )
// console.log( max );


// Task 3

// let person = { name: "John", age: 30 }
// let copy = { ...person }
// console.log( copy );


// Task 4 

// let arr = [ 1 , 2 , 3 ]
// console.log( [...arr , 4 , 5 ] );


// Task 5 

// const obj1 = { a : 1 }
// const obj2 = { b : 2 }
// const obj3 = { c : 3 }
// let object = { ...obj1 , ...obj2 , ...obj3 }
// console.log( object );




// REST 

// function main ( special ,  ...andOthers ) {
//     console.log( "Special - " , special );
//     console.log( "And Other's - " , andOthers );
// }
// console.log( main ( "Phone" , "Bag" , "Glasses" , "Gift" , "Charger"));

// Task 1 

// function main ( ...a ) { return a.flat( ) } console.log( main ( [ 1 , 2 ] , [ 3 , 4 ] , [ 5 , 6 ] ) );

// Task 2 

// function main ( ...a ) {
//     let sum = 0
//     a.forEach (( elem ) => {
//         sum += elem
//     })
//     return sum 
// }
// console.log( main ( 1 , 2 , 3 , 4 ) );

// Task 3 


// function main ( ...a ) {
//     let max = -9999 , res = ""
//     a . forEach (( elem ) => {
//         if ( elem.length >= max ) {
//             max = elem.length 
//             res = elem 
//         }
//     })
//     return res 
// }
// console.log( main ( "apple" , "banana" , "pear" , "watermelon" ) );


// Task 4

// function main ( ...a ) {
//     let sum = ""
//     a.forEach (( elem ) => {
//         if ( elem != "-" ){
//             sum += elem + "-"
//         } 
//     })
//     return sum . slice ( 0 , -1 )
    
// }
// console.log( main ( "-", "apple", "banana", "cherry" ));


















