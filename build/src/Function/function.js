"use strict";
// BELAJAR FUNCTION DALAM TYPESCRIPT
// FUNCTION TANPA ARGUMEN/PARAMETER
function getName() {
    // Wajib ada return sesuai dengan type data yang dideklarasikan
    return "Jaya Miko Yoga Pratama";
}
const data = ["Jaya", "Miko"];
function getData() {
    // Type data void tidak boleh ada keyword return
    console.log("data", data);
}
console.log("Function:", getName());
getData();
// FUNCTION ARGUMEN/PARAMETER
function multiple(value1, value2) {
    // Harus sesuai type data yang dideklarasi
    return value1 * value2;
}
const result = multiple(2, 2);
console.log("Function Argumen:", result);
let umur = 23;
console.log(umur);
const Add = (val1, val2) => {
    return val1 + val2;
};
const resultAdd = Add(5, 5);
console.log(resultAdd);
