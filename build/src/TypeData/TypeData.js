"use strict";
// Type Data of Typescript
// String
let firstName = "Jaya Miko";
let lastName = " Yoga Pratama";
// firstName = 100; ERROR (Karena Static Variable / Strong Type)
console.log("String", firstName + lastName);
// Number
let Seratus = 100;
// let Seratus: number = "100"; // ERROR (Karena Static Variable / Strong Type)
// Boolean
let isLogin = true; //true
isLogin = false; //false
// let Seratus: number = "100"; // ERROR (Karena Static Variable / Strong Type)
console.log("Number", Seratus);
console.log("Boolean", isLogin);
// any (Type Data Bebas)
let something = "Jaya";
let someone = 1;
console.log("any", something, someone);
// Enum (Digunakan untuk mendefinisikan data yang berisi sekumpulan konstanta numerik)
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
// String Enum
var ColorString;
(function (ColorString) {
    ColorString["Red"] = "Red";
    ColorString["Green"] = "Green";
    ColorString["Blue"] = "Blue";
})(ColorString || (ColorString = {}));
console.log("Enum", Color.Red, ColorString.Blue);
// Array (Sekumpulan Data)
const myName = ["Jaya", "Miko"];
let angka = [100, 200];
// let name: number[] = [100, "String"]; // ERROR (Karena Static Variable / Strong Type)
// Atau dengan cara seperti ini :
let dataArray = ["Jaya", 1905];
console.log("Array", myName, angka, dataArray);
// Array Tuple
// Tipe data setiap elmen boleh beda asal sesuai urutan saat deklarasi variable
let tuple = ["a", 1];
tuple.push(100); // OK
tuple.push("xx"); // OK
// tup = [1000, "xxx"]; // error, yg pertama harus string
console.log("tuple", tuple);
// Union Type
// Untuk deklarasi variable untuk tipe data lebih dari satu tapi terbatas
let a; // a bisa string atau number
a = 100; // OK
a = "xx"; // OK
// a = false; // error, a nggak bisa boolean
console.log("Union", a); //xx
