interface MyType {
    id: number;
}

interface AnotherType extends MyType { }

function genericFunction<T extends MyType>(p1: T) { }

const arg: AnotherType = {
    id: 1
}

genericFunction(arg); // ✅
genericFunction({ id: 123 }); // ✅
// genericFunction("123") // Argument of type 'string' is not assignable to parameter of type 'MyType'.

// Note: The following code is expected to throw an error ❌
function returnFirstElementInArray(elem: unknown[]): unknown {
    if (elem.length > 0) {
        return elem[0];
    }

    return 0;
}

const arr = [1, 2, 4];
const bigger = returnFirstElementInArray(arr) * 10; //Does not work: unknown cannot bwe multiplied by 10.

console.log("bigger", bigger);

// Generic to the rescue
function returnFirstElementInArray2<T>(elem: T[]): T {
    return elem[0];
}

const arr2: number[] = [1, 2, 4];
const bigger2 = returnFirstElementInArray2(arr2) * 10;
console.log("bigger2", bigger2);

const first = returnFirstElementInArray2(arr2);
console.log("The first value = ", arr2.indexOf(first));
console.log("The first value", arr2.findIndex(a => a === first));