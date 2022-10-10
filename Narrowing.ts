// Narrowing
// Imaging we have a function called padLeft
function padLeft(padding: number | string, input: string) {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }

  return padding + input;
}

function printAll(str: string | string[] | null) {
  if (!!str && typeof str === "object") {
    for (const s of str) {
      console.log(s);
    }
  } else if (typeof str === "object") {
    console.log(str);
  } else {
    // do nothing.
  }
}

// DON'T TO THIS!
// KEEP READING
// !!!!!!!!!!!!!!!!!!!!!!
// We wrapped the entire body of the function in a truthy check, but this has a subtle downside:
// we may no longer be handling the empty string case correctly
function printValue(str: string | string[] | null) {
  if (str) {
    if (typeof str === "object") {
      for (const s of str) {
        console.log(s);
      }
    }
  } else if (typeof str === "string") {
    console.log(str);
  }
}

// One last word on narrowing by truthiness is that Boolean negations with !
// filer out from negated branches.
function multipleAll(values: number[] | undefined, factor: number) {
  if (!values) {
    return values;
  }

  return values.map((x) => x * factor);
}

type Fish = {
  swim: () => void;
};

type Bird = {
  fly: () => void;
};

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }

  return animal.fly();
}

// instanceof narrowing
// operator for checking whether or not a value is an "instance" of another value
function checkHasInstance(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
}

let x: string | number = Math.random() < 0.5 ? 10 : "hello world!";
console.log("x ===>", x);

x = 1;
console.log("x ===>", x);

x = "goodbye!";
console.log("x ===>", x);

interface Shape {
  kind: "circle" | "square";
  radius?: number;
  sideLength?: number;
}

function getArea(shape: Shape) {
  return Math.PI * shape.radius! ** 2;
}

interface Circle {
  kind: "circle";
  radius: number;
}

interface Square {
  kind: "square";
  sideLength: number;
}

type Shape2 = Circle | Square;

function getArea2(shape: Shape2) {
  return Math.PI * shape.radius ** 2; // TpeScript couldn't tell whether the property was present.
}

function getArea3(shape: Shape2) {
  // if (shape.kind === "circle") {
  //     return Math.PI * shape.radius ** 2;
  // }

  // Or this
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}

interface Circle2 {
  kind: "circle";
  radius: number;
}

interface Square2 {
  kind: "square";
  sideLength: number;
}

interface Triangle {
  kind: "triangle";
  sideLength: number;
}

type Shape3 = Circle | Square | Triangle;

function getArea4(shape: Shape3) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape; // Type 'Triangle' is not assignable to type 'never'.
  }
}

getArea4({});
