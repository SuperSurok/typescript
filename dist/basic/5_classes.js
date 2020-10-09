"use strict";
class TypeScript {
    constructor(version) {
        this.version = version;
    }
    info(name) {
        return `[${name}]: TypeScript version is ${this.version}`;
    }
}
class Car {
    constructor(theModel) {
        this.wheels = 4;
        this.model = theModel;
    }
}
// Identic, but shorter
class CarLaconic {
    constructor(model) {
        this.model = model;
        this.wheels = 4;
    }
}
// ==== Modificators ==== //
class Animal {
    constructor() {
        // For all after invoke
        this.voice = "";
        // For all
        this.color = "black";
    }
    // Only for parent class
    go() {
        console.log("Go");
    }
}
class Cat extends Animal {
    setVoice(voice) {
        this.voice = voice;
    }
    getVoice() {
        return this.voice;
    }
}
const cat = new Cat();
console.log(cat.getVoice());
console.log(cat.color);
// ==== Abstract Classes ==== //
class Component {
}
class App extends Component {
    render() {
        console.log("Render");
    }
    info() {
        return "Component return string";
    }
}
