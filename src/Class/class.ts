// Class pada Typescript
export class Animals {
  constructor(public run: boolean, public see: boolean) {}
}

let animals = new Animals(true, true);
console.log(animals.run); //true
console.log(animals.see); //true

// INHERITANCE (CLASS TURUNAN)
class Cat extends Animals {
  jump: boolean = true;
  voice: string = "Meow";

  eats(eat: string): string {
    return eat;
  }

  getBehaviour(): {jump: boolean; voice: string} {
    return {
      jump: this.jump,
      voice: this.voice,
    };
  }
}

let cat = new Cat(true, true);

console.log("Cat Run:", cat.run);
console.log("Cat see", cat.see);
console.log("Cat Jump:", cat.jump);
console.log("Cat eat:", cat.eats("fish"));
console.log("Cat behaviour:", cat.getBehaviour());

// Static Prop / Method
export class Form {
  static role = "Admin";
  constructor(public fistName: string, public lastName: string) {}
  static getData() {
    return "Data Admin";
  }
}

const role = Form.role;
const data = Form.getData();

console.log(role);
console.log(data);
