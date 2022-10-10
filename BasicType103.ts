let x1 = undefined;
let x2 = null;
let x3 = -0;
let x4 = 0;
let x5 = NaN;
let x6 = {};
let x7: any[] = [];

function printTrueOrFalse(b: any | any[]): void {
  if (b) {
    console.log(`The value ${b} is true`);
  } else {
    console.log(`The value ${b} is false`);
  }
}

printTrueOrFalse(x1);
printTrueOrFalse(x2);
printTrueOrFalse(x3);
printTrueOrFalse(x4);
printTrueOrFalse(x5);
printTrueOrFalse(x6);
printTrueOrFalse(x7);

// A piece of code that uses any is harder to maintain
// because it is harder to understand
function configure(object: any, option: any) {}

// Should tell you less than
interface Server {
    ipv4: string;
    ipv6: string;
    port: number;
    https: boolean;
}

interface ServerOptions {
    maxUser: number;
    maxConcurrentRequests: number;
}

function configure2(object: Server, option: ServerOptions): Server {
    return object;
}

// Mutable arrays
const multipleTypeArray = [1, 3, true];
// Same as
// It is good practice to be explicit.
let multipleTypeArrayExplicit: (number | boolean)[] = [1, 3, true];

//Strongly-type object array
let myArray = new Array<number>();
printArray(myArray);

// Is the same as
let myArray2: Array<number> = [];
printArray(myArray2);

// Is the same as
let myArray3: number[] = [];
printArray(myArray);

function printArray(a: number[]): void {
    console.log(`Before: ${a}`);
    a.push(1);
    console.log(`After: ${a}`);
}

// Immutable arrays
let list: ReadonlyArray<number> = [1, 3];
list.push(3); // The property 'push' does not exist on type 'readonly' number[]
console.log(list);

let list1: readonly number[] = [1, 2];
list1.push(3); // The property 'push' does not exist on type 'readonly' number[]
console.log(list1);

const list2: number[]  [1, 2];
list2.push(3); // Cannot reassign a constant

let arr = [];
arr[0] = 5;
arr[1] = "aString";
arr[2] = true;