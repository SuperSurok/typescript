// Присваивание типа переменной
// Литерал
const cars: string[] = ["Ford", "Mercury"];

// Дженерик
const cars2: Array<string> = ["Ford", "Mercury"];
const promise: Promise<number> = new Promise(resolve => {
  setTimeout(() => {
    resolve(3000);
  }, 2000);
});

promise.then(data => {
  console.log(data.toString());
});

// Присвоить типы праметрам функции через дженерик
// 1 Назначить тип для дженерика
// 2 Присвоить типы для аргументов
// 3 Присвоить типы для возвращаемых значений
//                    {                1                }{     2    }  { 3 }
function mergeObjects<T extends object, R extends object, F extends any>(a: T, b: R, f: F): T & R & F {
  return Object.assign({}, a, b, f);
}

const merged = mergeObjects({ name: "Sergey" }, { lastName: "Lebedev" }, { job: ['fullstack developer'] })
// const errorMerged = mergeObjects({name: 'Pavel'}, 'asdfasdf'); // => will be error
console.log(merged.name);

// ======================
// 1) Интерфейс для дженерика, 
// который позволяет работать с типом данных 
// у которых есть свойство length => string, array
// 2) Задаём тип дженерику
// 3) Задаём тип аргумента
// 4) Задаём типы возвращаемых данных

// {      1      }
interface ILength {
  length: number;
}
//                {         2       } {   3   }   {           4             }
function withCount<T extends ILength>(value: T): { value: T; count: string } {
  return {
    value,
    count: `Количество ${value.length} символов.`,
  };
}
console.log(withCount("Hello, TS!!!"));
console.log(withCount([1, 2, 3]));

// ======================
// 1) Задаём тип дженерика
// 1.1) Задаём второй тип дженерика, на основании ключей объекта от первого типа
// 2) Задаём типы аргументов
//                      {                1           1.1   }{       2       }
function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
  return obj[key];
}

const person = {
  name: "Sergey",
  age: 39,
  job: "",
};
console.log(getObjectValue(person, "name"));
console.log(getObjectValue(person, "age"));
console.log(getObjectValue(person, "job"));

// ====================
// 1 Установка типа данных
// 2 Применение типа днных к структуре
//              {             1            }
class Collection<T extends number | string> {
  //                            {   2   }
  constructor(private _items: T[] = []) { }

  add(item: T) {
    this._items.push(item);
  }

  remove(item: T) {
    this._items = this._items.filter(i => i !== item);
  }

  get(): T[] {
    return this._items;
  }
}

const strings = new Collection<string>(['1', '2', '3']);
const numbers = new Collection<number>([1, 2, 3]);

// ==================== Parital ==================== //
// Возвращаемые свойства объекта опциональны
interface newCar {
  carModel: string;
  carYear: number;
}

function validateCar(modelCar: string, yerar: number): newCar {
  const car: Partial<newCar> = {};
  return car as newCar;
}

// ==================== Raadonly ==================== //
const ford: Readonly<newCar> = {
  carModel: 'Ford',
  carYear: 1956,
}
// ford.model = 'Jeep'; // => will be mistake
