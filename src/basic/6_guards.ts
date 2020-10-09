function strip(data: string | number) {
  if (typeof data === "number") {
    return data.toFixed(2);
  }
  return data.trim();
}

class MyResponse {
  header = "responce header";
  result = "response result";
}

class MyError {
  header = "error header";
  message = "error message";
}

function request(data: MyResponse | MyError) {
  if (data instanceof MyResponse) {
    return {
      info: data.header + data.result,
    };
  }
  return {
    info: data.header + data.message,
  };
}

type alertType = "success" | "danger" | "warning";
function setAlert(type: alertType): string {
  return type;
}

setAlert("success");
setAlert("danger");
// setAlert("default"); => doesn't work
