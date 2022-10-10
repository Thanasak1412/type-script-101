var greeting: string = "Greeting! ";
var welcome_message: string = "Welcome to Educative.";

console.log(greeting + welcome_message);

function varFunction() {
  var x = "111";
  let y = "123";

  if (true) {
    var x = "999";
    let y = "456";
  }

  console.log("x => ", x);
  console.log("y => ", y);
}

varFunction();