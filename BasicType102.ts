console.log("typeof Date()", typeof Date());

// @error: 2532
function printName(obj: { first: string; last?: string }) {
  // Error - might crash if 'obj.last' wasn't provided!
  // console.log(obj.last.toUpperCase());
  if (obj.last !== undefined) {
    console.log(obj.last.toUpperCase());
  }
  // A safe alternative using modern JavaScript syntax:
  console.log(obj.last?.toUpperCase());

  return obj;
}

console.log(printName({ first: "first", last: "last" }));

// Return type is inferred as number[] | string
function getFirstThree(x: number[] | string) {
  return x.slice(0, 3);
}

console.log(getFirstThree("Thanasak"));

// Type Aliases
type Point = {
  x: number;
  y: number;
};

// Exactly the same as the earlier example
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });

declare function getInput(): string;
declare function sanitize(str: string): string;
// ---cut---
type UserInputSanitizedString = string;

function sanitizeInput(str: string): UserInputSanitizedString {
  return sanitize(str);
}

// Create a sanitized input
let userInput = sanitizeInput(getInput());

// Can still be re-assigned with a string though
userInput = "new input";

// Adding new fields to an existing interface
interface Window {
  title: string;
}

interface Window {
  ts: TypeScriptAPI;
}

const src = 'const a = "Hello World"';
window.ts.transpileModule(src, {});

// A type can't be changed after being created
type Window2 = {
  title: string;
};

type Window2 = {
  ts: TypeScriptAPI;
};

// Error: Duplicate identifier 'Window'.

declare function handleRequest(url: string, method: "GET" | "POST"): void;

// ---cut---
const req = {
  url: "https://example.com",
  method: "GET",
};

handleRequest(req.url, req.method);

function liveDangerously(x?: number | null) {
    // No error
    console.log(x?.toFixed);
    console.log(x!.toFixed());
}