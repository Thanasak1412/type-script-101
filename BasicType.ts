// TypeScript basic types
// Boolean
const active: boolean = true;

// Number
const decimal: number = 9;
const hex: number = 0xf00d;
const binary: number = 0b1010;
const octal: number = 0o744;

// String
const message: string = "Welcome";

// Array
// There are two ways of defining Array types

// First way -> type[]
const firstArray: number[] = [1, 2, 3];

// Second way -> Array<type>
const secondArray: Array<number> = [4, 5, 6];

// If we are working with something more complex than a type of number,
// then we won't be able to use the first notation

// Our function accepts an array of objects with a label and a value as its properties
function example(ars: Array<{ label: string; value: string }>) {
  // do something
}

// Object
function greetUser(user: { name: string; age: number }) {
  // property name does not exist on type object
  console.log(`hello ${user.name}`);
}

greetUser({ name: "Alberto", age: 27 });

// Tuple allow you to define the type of known elements of an array
let myTuple: [string, number, string];
myTuple = ["Hi", 5, "hello"];

// Enum is a away of giving names to a set of numeric values
// The values inside of an enum start from 0
enum Status {
  deleted,
  pending,
  active,
}

const blogPostStatus: Status = Status.active;

console.log("blogPostStatus", blogPostStatus);

// You could override the starting point of an enum by specifying it like this
enum group {
  admin = 1,
  hq = 2,
  branch = 3,
}

const groupPosition: group = group.hq;

console.log("groupPosition", groupPosition);

// We can also access the values of an enum based on their value
console.log(`group admin: ${group[1]}`);

// Any
// We can also use any when we only know part of our types
const firstUser: Object<any> = {
  name: "Alberto",
  age: 27,
};

const secondUser: Object<any> = {
  name: "Caroline",
};

// void = defines the absence of type.
function storeValueInDatabase(objectToStore): void {
    // store your value in the database
    // const num1: number = 1;
    // const num2: number = 2;

    // return num1 * num2; // Type number is not assign to type void
}

// null and undefined
// Similarly to void, it's not very useful to create variables of type
// null or undefined because we would only be able to assign them null and undefined as values

// never = is a value that never occurs.
function throwError(error: string): never {
    throw new Error(error);
}