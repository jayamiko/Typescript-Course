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
class Cat extends Animals {
    constructor() {
        super(...arguments);
        this.jump = true;
        this._voice = "";
    }
    set(value) {
        //   Set tidak boleh mengembalikan return
        this._voice = value;
    }
    get() {
        return this._voice;
    }
}
const cat = new Cat(true, true);
cat.set("meow");
console.log(cat.get());
