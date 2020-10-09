const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
const float: number = 4.2;

const messgage: string = "TypeScript";

const arrNum: number[] = [1, 2, 3, 4];
const arrNum2: Array<number> = [1, 2, 3, 4];
const arrStr: string[] = ["react", "typesript"];

// Tuple
const contact: [string, number] = ["name", 1232313];

// Type 'any'
let variable: any = 42;
variable = "str";

// =======
function sayName(name: string): void { // Функция ничего не возвращает
  console.log(name);
}

sayName("Sergey");

// Type 'never'
function throwError(message: string): never {
  throw new Error(message);
}

function infinite(): never {
  while(true){

  }
}

// Type
type Login = string;
const login: Login = 'string';

type ID = string | number;
const id: ID = '21212';
const id2: ID = 121212;

type SomeType = string | null | undefined;
