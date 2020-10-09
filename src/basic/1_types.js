"use strict";
const isFetching = true;
const isLoading = false;
const int = 42;
const float = 4.2;
const messgage = "TypeScript";
const arrNum = [1, 2, 3, 4];
const arrNum2 = [1, 2, 3, 4];
const arrStr = ["react", "typesript"];
// Tuple
const contact = ["name", 1232313];
// Type 'any'
let variable = 42;
variable = "str";
// =======
function sayName(name) {
    console.log(name);
}
sayName("Sergey");
// Type 'never'
function throwError(message) {
    throw new Error(message);
}
function infinite() {
    while (true) {
    }
}
const login = 'string';
const id = '21212';
const id2 = 121212;
