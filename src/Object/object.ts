// Object of TypeScript

// Cara Pertama
let user = {
  name: "Jaya Miko Yoga Pratama",
  age: 23,
};

// Dirubah
user = {
  name: "Jaya Miko",
  age: 20,
  // address: "Bekasi" //Error
};

console.log("Object Pertama", {user});

// Cara Kedua
type User = {
  name: string;
  age: number;
};

let dataUser: User = {
  name: "Jaya Miko",
  age: 23,
};

console.log("Object Kedua", {dataUser});
