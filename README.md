# TypeScript Presentation

#### Lebedev Sergey

## Содержание

[Basic Types](#utility-types)

- [Primitives](#primitives)
- [Arrays](#arrays)
- [any](#any)
- [Type Annotations on Variables](#typeannotationsonvariables)

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

- `string` - отображает строковые значения "TypeScript"
- `number` - отображает числовые значения 1982. Как целочисленные, так и с плавающей точкой
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
Даёт возможность составить один тип из двух типов.\

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
