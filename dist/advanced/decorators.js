"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Существует четыре вида декораторов
// 1) Для классов
// 2) Для свойств
// 3) Для методов внутри классов
// 4) Для геттеров и сеттеров
// {             1                }
function Log(consturctor) {
    // console.log(consturctor);
}
// {              2               }
function Log2(target, propName) {
    // console.log(target);
    // console.log(propName);
}
//{               3               }
function Log3(target, propName, descriptor) {
    console.log(target);
    console.log(propName);
    console.log('descriptor: ', descriptor);
}
//{               4               }
function Log4(target, propName, descriptor) {
    console.log(target);
    console.log(propName);
    console.log('descriptor: ', descriptor);
}
function DecoratorComponent(config) {
    return function (Consturctor) {
        return class extends Consturctor {
            constructor(...rest) {
                super(...rest);
                const elem = document.getElementById(config.selector);
                elem.innerHTML = config.template;
            }
        };
    };
}
;
function Bind(_, _2, descriptor) {
    const original = descriptor.value;
    return {
        configurable: true,
        enumerable: false,
        get() {
            return original.bind(this);
        }
    };
}
let NewComponent = class NewComponent {
    constructor(name) {
        this.name = name;
    }
    logName() {
        console.log(`Name: ${this.name}`);
    }
};
__decorate([
    Bind
], NewComponent.prototype, "logName", null);
NewComponent = __decorate([
    DecoratorComponent({
        selector: 'card',
        template: `
    <div class="card">
      <div class="crad-title">Cart Title</div>
      <div class="crad-content">
        <p>Content<p>
      </div>
    </div>
  `,
    })
], NewComponent);
const elem = new NewComponent('New Component');
const btn = document.getElementById('btn');
btn.addEventListener('click', elem.logName);
const validators = {};
function Required(target, propName) {
    validators[target.consturctor.name] = Object.assign(Object.assign({}, validators[target.consturctor.name]), { [propName]: 'required' });
}
class Form {
    constructor(email) {
        this.email = email;
    }
}
__decorate([
    Required
], Form.prototype, "email", void 0);
