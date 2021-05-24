# TypeScript Presentation

#### Lebedev Sergey

## Содержание

1. [Utility Types](#utility-types)
   - [`Partial<Type>`](#partialtype)
   - [`Required<Type>`](#requiredtype)
   - [`Record<Keys,Type>`](#recordkeystype)
   - [`Readonly<Type>`](#readonlytype)
   - [`Pick<Type,Keys>`](#picktypekeys)
   - [`Omit<Type,Keys>`](#omittypekeys)
   - [`Excluded<Type,ExcludedUnion>`](#excludedtypeexcludedunion)

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

todo2 // ошибка

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
