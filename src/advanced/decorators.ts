
// Существует четыре вида декораторов
// 1) Для классов
// 2) Для свойств
// 3) Для методов внутри классов
// 4) Для геттеров и сеттеров
// {             1                }
function Log(consturctor: Function) {
  // console.log(consturctor);
}
// {              2               }
function Log2(target: any, propName: string | Symbol) {
  // console.log(target);
  // console.log(propName);
}
//{               3               }
function Log3(target: any, propName: string | Symbol, descriptor: PropertyDescriptor) {
  console.log(target);
  console.log(propName);
  console.log('descriptor: ', descriptor);
}

//{               4               }
function Log4(target: any, propName: string | Symbol, descriptor: PropertyDescriptor) {
  console.log(target);
  console.log(propName);
  console.log('descriptor: ', descriptor);
}

interface INewComponent {
  selector: string;
  template: string;
}

function DecoratorComponent(config: INewComponent) {
  return function <T extends { new(...rest: any[]): object }>
    (Consturctor: T) {
    return class extends Consturctor {
      constructor(...rest: any[]) {
        super(...rest)
        const elem = document.getElementById(config.selector)!;
        elem.innerHTML = config.template;
      }
    }
  }
};

function Bind(_: any, _2: any, descriptor: PropertyDescriptor): PropertyDescriptor {
  const original = descriptor.value;
  return {
    configurable: true,
    enumerable: false,
    get() {
      return original.bind(this);
    }
  }
}


@DecoratorComponent({
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

class NewComponent {
  constructor(public name: string) { }

  @Bind
  logName(): void {
    console.log(`Name: ${this.name}`);
  }
}

const elem = new NewComponent('New Component');
const btn = document.getElementById('btn')!;
btn.addEventListener('click', elem.logName);

// ======================

type ValidatorType = 'required' | 'email';

interface ValidatorConfig {
  [prop: string]: {
    [validateProp: string]: ValidatorType
  }
}

const validators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  validators[target.consturctor.name] = {
    ...validators[target.consturctor.name],
    [propName]: 'required',
  }
}

class Form {
  @Required
  public email: string | void;
  constructor(email?: string) {
    this.email = email;
  }
}