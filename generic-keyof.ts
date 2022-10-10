// Generic and keyof
interface TypeA {
    prop1: string;
    prop2: number;
}

const p1: TypeA = {
    prop1: "String",
    prop2: 123
}

function printProps<T, K extends keyof T>(p1: T, p2: K[]): void { // Extends all properties' name of T
    console.log("Printing:");
    p2.forEach(propName => {
        console.log(`Name: ${propName.toString()} and value: ${p1[propName]}`);
    });
}

printProps(p1, ["prop1"]);
printProps(p1, ["prop1", "prop2"]);
// printProps(p1, ["prop1", "prop3"]); // Type 'Type3' is not assignable to type 'keyof TypeA'