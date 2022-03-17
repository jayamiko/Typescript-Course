// BELAJAR FUNCTION DALAM TYPESCRIPT

// FUNCTION TANPA ARGUMEN/PARAMETER
function getName(): string {
  // Wajib ada return sesuai dengan type data yang dideklarasikan
  return "Jaya Miko Yoga Pratama";
}

const data: string[] = ["Jaya", "Miko"];
function getData(): void {
  // Type data void tidak boleh ada keyword return
  console.log("data", data);
}

console.log("Function:", getName());
getData();

// FUNCTION ARGUMEN/PARAMETER
function multiple(value1: number, value2: number): number {
  // Harus sesuai type data yang dideklarasi
  return value1 * value2;
}

const result = multiple(2, 2);
console.log("Function Argumen:", result);

// FUNCTION SEBAGAI TYPE DATA
type Age = number;
let umur: Age = 23;
console.log(umur);

type Add = (val1: number, val2: number) => number;
const Add: Add = (val1: number, val2: number): number => {
  return val1 + val2;
};
const resultAdd = Add(5, 5);
console.log(resultAdd);
