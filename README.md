# TypeScript Presentation

#### Lebedev Sergey

## Содержание

1. [Utility Types](#utility-types)
   - [`Partial<Type>`](#Partial<Type>)
   - [`Required<Type>`](#Required<Type>)
   - [`Record<Keys,Type>`](#Record<Keys,Type>)
   - [`Readonly<Type>`](#Readonly<Type>)
   - [`Pick<Type,Keys>`](#picktypekeys)

### Utility Types

#### Partial<Type>

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

#### Required<Type>

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

#### Readonly<Type>

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

#### Record<Keys,Type>

Создаёт объект типа чьи ключи(keys) являются ключами Keys, а значения(values) это значения Type.  
Эта утилита может быть полезна для сопоставления свойств одного типа с другим типом.  
Даёт возможность составить одни тип из двух типов.

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

#### Pick<Type,Keys>

Создаёт тип собирая набор необходимых свойств `Keys` \
(строковый литерал или объединение строковых литералов) из `<Type>`

##### Пример

```ts
type Todo = {
  title: string;
  description: string;
  completed: boolean;
};

type TodoPreview = Pick<Todo, "titile" | "cpmpleted">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};

todo; // => const todo: TodoPreview
```
