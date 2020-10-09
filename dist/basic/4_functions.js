"use strict";
function add(a, b) {
    return a + b;
}
function tuUpperCase(str) {
    return str.trim().toUpperCase();
}
function position(a, b) {
    if (!a && !b) {
        return { x: undefined, y: undefined };
    }
    if (a && !b) {
        return { x: a, y: undefined, default: a.toString() };
    }
    return { x: a, y: b };
}
;
console.log('Empty: ', position());
// console.log('One: ', position(3));
console.log('Two: ', position(5, 7));
