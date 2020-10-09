"use strict";
// Присваивание типа переменной
// Литерал
const cars = ["Ford", "Mercury"];
// Дженерик
const cars2 = ["Ford", "Mercury"];
const promise = new Promise(resolve => {
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
function mergeObjects(a, b, f) {
    return Object.assign({}, a, b, f);
}
const merged = mergeObjects({ name: "Sergey" }, { lastName: "Lebedev" }, { job: ['fullstack developer'] });
// const errorMerged = mergeObjects({name: 'Pavel'}, 'asdfasdf'); // => will be error
console.log(merged.name);
//                {         2       } {   3   }   {           4             }
function withCount(value) {
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
function getObjectValue(obj, key) {
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
class Collection {
    //                            {   2   }
    constructor(_items = []) {
        this._items = _items;
    }
    add(item) {
        this._items.push(item);
    }
    remove(item) {
        this._items = this._items.filter(i => i !== item);
    }
    get() {
        return this._items;
    }
}
const strings = new Collection(['1', '2', '3']);
const numbers = new Collection([1, 2, 3]);
function validateCar(modelCar, yerar) {
    const car = {};
    return car;
}
// ==================== Raadonly ==================== //
const ford = {
    carModel: 'Ford',
    carYear: 1956,
};
// ford.model = 'Jeep'; // => will be mistake
