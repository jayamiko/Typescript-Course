"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animals = void 0;
// Class pada Typescript
class Animals {
    constructor(run, see) {
        this.run = run;
        this.see = see;
    }
}
exports.Animals = Animals;
let animals = new Animals(true, true);
console.log(animals.run); //true
console.log(animals.see); //true
// INHERITANCE (CLASS TURUNAN)
class Cat extends Animals {
    constructor() {
        super(...arguments);
        this.jump = true;
        this.voice = "Meow";
    }
    eats(eat) {
        return eat;
    }
    getBehaviour() {
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
