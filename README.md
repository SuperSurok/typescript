# TypeScript Presentation

#### Lebedev Sergey

## Table of Contents

[Basic Types](#basic-types)

- [Primitives](#primitives)
- [Arrays](#arrays)
- [any](#any)
- [Type Annotations on Variables](#type-annotations-on-variables)
- [Functions](#functions)

[Object Types](#object-types)

- [Optional Properties](#optional-properties)

[Union Types](#union-types)

- [Defining a Union Type](#defining-a-union-type)

[Type Aliases](#type-aliases)

[Interfaces](#interfaces)

[Differences Between Type Aliases and Interfaces](#differences-between-type-aliases-and-interfaces)

[Type Assertions](#type-assertions)

[Literal Types](#literal-types)

- [Literal Inference](#literal-inference)

[null and undefined](#null-and-undefined)

[Non-null Assertion Operator (Postfix !)](<#non-null-assertion-operator-(postfix-!)>)

[Enums](#enums)

- [Numeric Enums](#numeric-enums)

[Utility Types](#utility-types)

- [`Partial<Type>`](#partialtype)
- [`Required<Type>`](#requiredtype)
- [`Record<Keys,Type>`](#recordkeystype)
- [`Readonly<Type>`](#readonlytype)
- [`Pick<Type,Keys>`](#picktypekeys)
- [`Omit<Type,Keys>`](#omittypekeys)
- [`Excluded<Type,ExcludedUnion>`](#excludedtypeexcludedunion)
- [`Extract<Type,Union>`](#extracttypeunion)
- [`NonNullable<Type>`](#nonnullabletype)
- [`Parameters<Type>`](#parameterstype)
- [`ConstructorParameters<Type>`](#constructorparameterstype)

### Basic Types

#### `Primitives`

- `string` - отображает строковые значения, например "TypeScript"
- `number` - отображает числовые значения, например 1982. Как целочисленные, так и с плавающей точкой
- `boolean` - применяется для `ture` и `false`

#### `Arrays`

- `number[]`, `string[]`, `Array<number>` - синтаксис для описания данных в массиве.

#### `any`

Это особый общий тип, который применяется, когда нет возможности точно определить тип элемента.\
Его следует избегать, так как `any` предоставляет возможность присваивать любое значение типу и выполнять\
любые операции с ними. Таким образом утрачивается возможность проверки типов.

#### `Type Annotations on Variables`

При объявлении переменной `const`, `let`, `var` опционально можно явно добавить аннотацию типа.

```ts
let myName: string = "Alice";
```

TS не использует левосторонний стиль присваивания, как `int x = 0`. Аннотации типов всегда будут идти после присваивания.\
В большинстве случаев TS автоматически выводит типы.

#### Functions

TS позволяет определять тип параметров и получаемого результата.

##### Parameters

Можно добавлять тип для каждого параметра, который принимает функция.
Если не типизировать параметры, TS будет проверять правильное количество\
переданных аргументов.

```ts
function greet(name: string) {
  console.log(`Hello, ${name.toUpperCase()} !`);
}
greet(42); // => Error
```

##### Return Value

В большинстве случаев нет необходимости указывать возвращаемый тип, \
т.к. TS устанавливает тип на основании возвращаемого значения

```ts
function getFavoriteNumber(): number {
  return 10;
}
```

##### Anonymous Functions

Анонимные функции имеют небольшое отличие от определения функций.\
Когда функция появляется в месте, где TS может определить, как она будет вызываться, \
параметрам этой функции автоматически присваиваются типы.

##### Пример

```ts
const names = ["Alice", "Bob", "Eve"];
// Контекстное типизирование для функции
names.forEach((s) => console.log(s.toUppercase())); // => Error
```

**[⬆ back to top](#table-of-contents)**

### Object Types

Чтобы описать тип объекта, нужно просто перечислить его свойства и присвоить им типы.

##### Пример

Определим параметр типом с двумя свойствами `x` и `y`, которые являются числами.\
Для разделения свойств можно использовать `,` или `;`\
Типизирование каждого свойства необязательно. Если не определить тип, \
он примет тип `any`.

```ts
function printCoord(pt: { x: number; y: number }) {
  console.log(`The coordinate's x value is ${pt.x}`);
  console.log(`The coordinate's y value is ${pt.y}`);
}

printCoord({ x: 3, y: 7 });
```

#### Optional Properties

Тип объекта также может указывать, что некоторые или все свойства объекта опциональны.

```ts
function printName(obj: { fist: string; last?: string }) {
  console.log(`${obj.fist.toUpperCase()}} ${last.last?.toUpperCase()}`);
}

printName({ fist: "Alice" }); // => ok
printName({ fist: "Alice", last: "Alisson" }); // => ok
```

**[⬆ back to top](#table-of-contents)**

### Union Types

TS позволяет строить новые типы на основе существующих, путём их комбинирования.

#### Defining a Union Type

```ts
function printId(id: number | string) {
  console.log(printId);
}
printId(100); // => ok
printId("200"); // => ok
printId({ id: "200" }); // => error
```

Работая с типом объединения, нужно помнить, что методы, применяемые к нему методы должны быть валидны для каждого члена.

##### Пример

```ts
function printId(id: number | string) {
  console.log(id.toUpperCase()); // => error
}
```

##### Правильно

```ts
function printId(id: number | string) {
  if (typeof is === "string") {
    console.log(id.toUpperCase());
  }
  console.log(id);
}

function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    console.log(`Hello, ${x.join(" and ")}`);
  }

  console.log(`Welcome ${x}`);
}

function getFirstFree(x: number[] | string) {
  return x.slice(0, 3);
}
```

**[⬆ back to top](#table-of-contents)**

### Type Aliases

Для многократного использования типов применяются `Type Aliases` или псевдонимы типов.\
Под псевдонимом подразумевается название типа. Название можно задать для любого типа.

##### Пример

```ts
type Point = {
  x: number;
  y: number;
};

function printCoord(pt: Point) {
  console.log(`The coordinate's x value is ${pt.x}`);
  console.log(`The coordinate's y value is ${pt.y}`);
}

printCoord({ x: 100, y: 100 });

type ID = number | string;
```

**[⬆ back to top](#table-of-contents)**

### Interfaces

Интерфейс — это альтернативный способ наименования типов.

##### Пример

```ts
interface Point {
  x: number;
  y: number;
}

function printCoord(pt: Point) {
  console.log(`The coordinate's x value is ${pt.x}`);
  console.log(`The coordinate's y value is ${pt.y}`);
}

pringCoord({ x: 100, y: 100 });
```

В TS применяется структурная типизация.\
Это означает, что типизация происходит на основании состава членов.

##### Пример

```ts
interface Name {
  name: string;
}

class Lodger {
  name: string;
}

let p: Lodger;
p = new Lodger();
```

**[⬆ back to top](#table-of-contents)**

### Differences Between Type Aliases and Interfaces

Псевдонимы типов и интерфейсы очень похожи.\
Ключевое отличие заключается в том, что типы не могут быть переоткрыты для добавления новых свойств.
Интерфейсы всегда расширяемы.

##### Расширение интерфейса

```ts
interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}
```

Добавление новых полей к интерфейсу

```ts
interface Window {
  title: string;
}

interface Window {
  ts: TypeScriptApi;
}
```

##### Расширение типа через пересечение

```ts
type Animal = {
  name: string;
};

type Bear = Animal & {
  honey: boolean;
};
```

Тип не может быть изменён после создания

```ts
type Window = {
  title: string;
};

type Window = {
  ts: TypeScriptApi;
};
// Error: Duplicate identifier 'Window'
```

**[⬆ back to top](#table-of-contents)**

### Type Assertions

Иногда TS не может определить точный тип значения.\
Для таких ситуаций применяется утверждение типа.

Нужно отметить, важную деталь, утверждение типа удаляется во время компилирования, \
поэтому во время выполнения программы не будет проверки связанной с утверждением типов.\
В связи с чем, не будет указано исключение или `null`, если утверждение типа указано неправильно.

##### Пример

```ts
const canvas = document.getElementById("convas") as HTMLCanvasElement;

const anotherCanvas = <HTMLCanvasElement>(
  document.getElementById("anotherCanvas")
);
```

**[⬆ back to top](#table-of-contents)**

### Literal Types

Тип представляющий только одно значение.
При обычном определении типов `string` или `number` существует возможность переопределить значение переменной.

```ts
let change = "Hello!";
change = "Bye!"; // => ok
```

Литерал типа не позволяет менять значение переменной.

```ts
let anotherChange: "Hello!" = "Hello!";
anotherChange = "Hello!";
anotherChange = "Bye!"; // => error
```

Можно создавать объединения литералов.

```ts
function someText(text: string, align: "center" | "left" | "right") {
  // align text...
}
someText("Intresting note", "bottom"); // => error
```

Можно комбинировать с более сложными типами.

```ts
type Witdh = {
  width: number;
};

function createOption(w: Witdh | "auto") {
  // do options
}

createOption("100px"); // => error
```

#### Literal Inference

При инициализации переменной с объектом TS предполагает, что свойства объекта могут быть изменены.

```ts
const obj = { value: 1 };
obj.value = 3; // => ok
```

При использовании строк получим ошибку.
TS считает, что код может измениться между созданием объекта и вызовом функции, которая может присвоить новое значение.

```ts
const req = {
  url: "https://api.github",
  method: "GET",
  value: 2,
};

function handle(param1: string, param2: "GET" | "POST", param3: 2) {
  console.log(param1, param2, param3);
}

handle(req.url, req.method, req.value); // Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'.
```

Есть два способа обработки этой ошибки.

1. Можно добавить утверждение типа для свойства объекта

```ts
const req = {
  url: "https://api.github",
  method: "GET" as "GET",
  value: 2,
};
```

2. Можно использовать утверждение типа `as const` для всего объекта

```ts
const req = {
  url: "https://api.github",
  method: "GET",
  value: 2,
} as const;
```

**[⬆ back to top](#table-of-contents)**

### null and undefined

`strictNullChecks` <b>off</b>
С опцией `strictNullChecks` <b>off</b> к значениям, которые могут быть `null` или `undefined` остаётся доступ в обычном \
режиме. Так же `null` и `undefined` могут быть присвоены свойству любого типа. Отсутствие проверки этих типов ведёт \
к большому количеству ошибок. Рекомендуется всегда включать проверку `strictNullChecks`.

С опцией `strictNullChecks` <b>on</b>, когда значение равно `null` или `undefined`, необходимо выполнить проверку этого \
значения.

```ts
function doSomething(x: string | null) {
  if (x === null) return;
  console.log(`Hello, ${x}`);
}
```

**[⬆ back to top](#table-of-contents)**

### Non-null Assertion Operator (Postfix !)

TS имеет специальный синтаксис для удаления `null` и `undefined` из типа без явной проверки. \
Для этого нужно написать `!` после любого выражения. Это эффективное утверждение типа, что значение \
не является `null` или `undefined`.

**[⬆ back to top](#table-of-contents)**

### Enums

Enums или перечисления — это фича, добавленная в JS из TS, которая позволяет описывать значение, \
являющееся одним из возможного набора именованных констант. В отличие от большинства TS фич, это не уровень типизации, \
добавленный в JS, но что-то добавленное в я зык и рантайм. Вы должны знать, что такая фича существует, но возможно вам \
нужно отложить её использование, пока вы не будете уверены. [Enum reference page](https://www.typescriptlang.org/docs/handbook/enums.html).

#### Numeric Enums

Числовое перечисление, в котором членам присваиваются номера. При инициализации номер 1, все последующие члены \
автоматически увеличиваются на единицу. Можно полностью обойтись без нумерации. В этом случае первому члену \
списка присваивается ноль. Авто прибавление полезно, для случаев, когда мы можем не заботиться о самих значениях членов, \
но когда каждое значение последовательности отличается от других.

```ts
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}
```

Перечисление просто использовать: доступ к любому члену как свойству самого перечисления для объявления типа, \
используется название перечисления.

```ts
enum UserResponse {
  No = 0,
  Yes = 1,
}

function respond(recipient: string, message: UserResponse): void {
  console.log(`${recipient}: ${message}`);
}

respond("Princess Caroline", UserResponse.Yes);
```

**[⬆ back to top](#table-of-contents)**

```ts
function liveDangerously(x?: number | null) {
  // No error
  console.log(x.toFixed());
}
```

Так же как и утверждение типов, эта проверка не меняет поведение кода во время выполнения. \
Важно использовать `!`, когда вы точно знаете, что значение не может быть `null` или `undefined`.

### Utility Types

#### `Partial<Type>`

Возвращает `Type` с опциональными полями.

##### Пример

```ts
type Todo = {
  title: string;
  description: string;
};

function updateTodo(todo: Todo, fieldsToUpdata: Partial<Todo>) {
  return { ...Todo, ...fieldsToUpdate };
}

const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};

const todo2 = updateTodo(todo1, {
  decription: "throw out trash",
});
```

#### `Required<Type>`

Создаёт тип в котором обязательны все свойства `Type`.\
Противоположность `Partial`.

##### Пример

```ts
type Props = {
  a?: number;
  b?: number;
};

const obj: Props = { a: 5 };
const obj2: Required<Props> = { a: 5 }; // => ошибка
```

#### `Readonly<Type>`

Создаёт тип со всеми свойствами `<Type>` только для чтения.\
Означает, что свойства типа не могут быть переопределены.

##### Пример

```ts
type Todo = {
  title: string;
};

const todo: Readonly<Todo> = {
  title: "Delete inactive users",
};

todo.title = "Hello!"; // => ошибка
```

#### `Record<Keys,Type>`

Создаёт объект типа, где ключи(keys) являются ключами Keys, могут быть `string | number | symbol`, а значения(values) являются значениями Type.  
Эта утилита может быть полезна для сопоставления свойств одного типа с другим типом.  
Даёт возможность составить один тип из двух типов.

##### Пример

```ts
type CatInfo = {
  age: number;
  breed: string;
};

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Main Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};

cats.boris; // => const cats: Record<CatName, CatInfo>
```

#### `Pick<Type,Keys>`

Создаёт тип собирая набор необходимых свойств `Keys`\
(строковый литерал или объединение строковых литералов) из `<Type>`

##### Пример

```ts
type Todo = {
  title: string;
  description: string;
  completed: boolean;
};

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};

todo; // => const todo: TodoPreview

const todo2: TodoPreview = {
  title: "Clean flat",
  completed: true,
  description: "Moving fast",
};

todo2; // => ошибка
```

#### `Omit<Type,Keys>`

Создаёт тип, беря все свойства из `Type` и затем удаляет указанные `Keys`\
(строковый литерал или объединение строковых литералов).

##### Пример

```ts
type Todo = {
  title: string;
  description: string;
  completed: boolean;
  createAt: number;
};

type TodoPreview = Omit<Todo, "description">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
  createAt: 1615544252770,
};

todo; // => const todo: TodoPreview;

const todo2: TodoPreview = {
  title: "Clean room",
  completed: false,
  createAt: 1615544252770,
  description: "Get clean gel",
};

todo2; // ошибка

type TodoInfo = Omit<Todo, "completed" | "createAt">;

const todoInfo: TodoInfo = {
  title: "Pick up kids",
  description: "Kindergarten closes at 5pm",
};

todoInfo; // => const todoInfo: TodoInfo
```

#### Excluded<Type,ExcludedUnion>

Создаёт тип исключая из `<Type>` все члены объединения объявленные в `ExcludedUnion`.

##### Пример

```ts
type T0 = Exclude<"a" | "b" | "c", "a">; // type T0 = "b" | "c";
type T1 = Exclude<"a" | "b" | "c", "a" | "b">; // type T1 = "c";
type T2 = Exclude<string | number | (() => void), Function>; // type T2 = string | number;
```

#### `Extract<Type,Union>`

Создаёт тип извлекая из `Type` все объединённые члены присвоенные `Union`.

##### Пример

```ts
type T0 = Extract<"a" | "b" | "c", "a" | "f">; // => T0 = "a"
type T1 = Extract<string | number | (() => void), Function>; // => T0 = () => void
```

#### `NonNullable<Type>`

Создаёт тип из `Type`, исключая из него `null` и `undefined`.

##### Пример

```ts
type T0 = NonNullable<string | number | undefined>; // => type T0 = string | number
type T0 = NonNullable<string[] | null | undefined>; // => type T0 = string[]
```

#### `Parameters<Type>`

Создаёт тип кортеж из типов, используемых в параметрах функции типа `Type`.

##### Пример

```ts
declare function f1(arg: { a: number; b: number }): void;

type T0 = Parameters<() => string>; // typeT0 = [];

type T1 = Parameters<(s: string) => void>; // => type T1 = [s: string];

type T2 = Parameters<<T>(arg: T) => T>; // => type T2 = [arg: unknown];

type T3 = Parameters<typeof f1>; // =>
/*
 * type T3 = [arg: {
 *  a: number;
 *  b: string;
 * }];
 */

type T4 = Parameters<any>; // => type T4 = unknown[];

type T5 = Parameters<never>; // => type T5 = never;

type T6 = Parameters<string>; // => Type 'string' does not satisfy the constraint '(...args: any) => any'.
// type T6 = never;

type T7 = Parameters<Function>; // =>
/*
 * Type 'Function' does not satisfy the constraint '(...args: any) => any'.
 * Type 'Function' provides no match for the signature '(...args: any): any'.
 * type T7 = never;
 */
```

#### `ConstructorParameters<Type>`

Создаёт кортеж или массив типа из типов функции конструктора.\
Производит кортеж типов со всеми параметрами типов (или типом `never` если `Type` не функция).

##### Пример

```ts
type T0 = ConstructorParameters<ErrorConstructor>;
// => type T0 = [message?: string];

type T1 = ConstructorParameters<FunctionConstructor>;
// => type T1 = string[];

type T2 = ConstructorParameters<RegExpConstructor>;
// => type T2 = [pattern: string | RegExp, flags?: string];

type T3 = ConstructorParameters<any>;
// => typeT3 = unknown[];

type T4 = ConstructorParameters<Function>;
// => type T4 = never;
/*
 * Type 'Function' does not satisfy the constraint 'abstract new (...args: any) => any'.
 *  Type 'Function' provides no match for the signature 'new (...args: any): any'.
 */
```

**[⬆ back to top](#table-of-contents)**
