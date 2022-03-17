// Class pada Typescript
export class Animals {
  constructor(public run: boolean, public see: boolean) {}
}

class Cat extends Animals {
  jump: boolean = true;
  private _voice: string = "";

  set(value: string) {
    //   Set tidak boleh mengembalikan return
    this._voice = value;
  }

  get(): string {
    return this._voice;
  }
}

const cat = new Cat(true, true);
cat.set("meow");
console.log(cat.get());
