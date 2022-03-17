// Type Data of Typescript

// String
let firstName: string = "Jaya Miko";
let lastName: string = " Yoga Pratama";
// firstName = 100; ERROR (Karena Static Variable / Strong Type)

console.log("String", firstName + lastName);

// Number
let Seratus: number = 100;
// let Seratus: number = "100"; // ERROR (Karena Static Variable / Strong Type)

// Boolean
let isLogin: boolean = true; //true
isLogin = false; //false
// let Seratus: number = "100"; // ERROR (Karena Static Variable / Strong Type)

console.log("Number", Seratus);
console.log("Boolean", isLogin);

// any (Type Data Bebas)
let something: any = "Jaya";
let someone: any = 1;
console.log("any", something, someone);

// Enum (Digunakan untuk mendefinisikan data yang berisi sekumpulan konstanta numerik)
enum Color {
  Red,
  Green,
  Blue,
}
// String Enum
enum ColorString {
  Red = "Red",
  Green = "Green",
  Blue = "Blue",
}

console.log("Enum", Color.Red, ColorString.Blue);

// Array (Sekumpulan Data)
const myName: string[] = ["Jaya", "Miko"];
let angka: number[] = [100, 200];
// let name: number[] = [100, "String"]; // ERROR (Karena Static Variable / Strong Type)

// Atau dengan cara seperti ini :
let dataArray: Array<any> = ["Jaya", 1905];

console.log("Array", myName, angka, dataArray);

// Array Tuple
// Tipe data setiap elmen boleh beda asal sesuai urutan saat deklarasi variable

let tuple: [string, number] = ["a", 1];
tuple.push(100); // OK
tuple.push("xx"); // OK
// tup = [1000, "xxx"]; // error, yg pertama harus string
console.log("tuple", tuple);

// Union Type
// Untuk deklarasi variable untuk tipe data lebih dari satu tapi terbatas
let a: string | number; // a bisa string atau number
a = 100; // OK
a = "xx"; // OK
// a = false; // error, a nggak bisa boolean

console.log("Union", a); //xx
