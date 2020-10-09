"use strict";
function strip(data) {
    if (typeof data === "number") {
        return data.toFixed(2);
    }
    return data.trim();
}
class MyResponse {
    constructor() {
        this.header = "responce header";
        this.result = "response result";
    }
}
class MyError {
    constructor() {
        this.header = "error header";
        this.message = "error message";
    }
}
function request(data) {
    if (data instanceof MyResponse) {
        return {
            info: data.header + data.result,
        };
    }
    return {
        info: data.header + data.message,
    };
}
function setAlert(type) {
    return type;
}
setAlert("success");
setAlert("danger");
// setAlert("default"); => doesn't work
