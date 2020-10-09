"use strict";
const rect1 = {
    id: "123123",
    size: {
        width: 23,
        height: 23,
    },
    color: "#cccccc",
};
const rect2 = {
    id: "121212",
    size: {
        width: 32,
        height: 32,
    },
};
rect2.color = "black";
const rect3 = {};
const rect4 = {};
const rect5 = {
    id: "123",
    size: {
        width: 32,
        height: 32,
    },
    getArea() {
        return this.size.width * this.size.height;
    },
};
class Clock {
    constructor() {
        this.time = new Date();
    }
    setTime(date) {
        this.time = date;
    }
}
const css = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: 20,
};
