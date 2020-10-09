class TypeScript {
  version: string;
  constructor(version: string) {
    this.version = version;
  }
  info(name: string) {
    return `[${name}]: TypeScript version is ${this.version}`;
  }
}

class Car {
  readonly model: string;
  readonly wheels: number = 4;
  constructor(theModel: string) {
    this.model = theModel;
  }
}

// Identic, but shorter
class CarLaconic {
  readonly wheels: number = 4;
  constructor(readonly model: string) {}
}

// ==== Modificators ==== //
class Animal {
  // For all after invoke
  protected voice: string = "";
  // For all
  public color: string = "black";
  // Only for parent class
  private go() {
    console.log("Go");
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice;
  }
  getVoice(): string {
    return this.voice;
  }
}

const cat = new Cat();
console.log(cat.getVoice());
console.log(cat.color);

// ==== Abstract Classes ==== //
abstract class Component {
  abstract render(): void;
  abstract info(): string;
}

class App extends Component {
  render(): void {
    console.log("Render");
  }

  info(): string {
    return "Component return string";
  }
}
