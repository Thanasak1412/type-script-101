// Generic comparison
// We need to create a custom generic array with a unique identifier (or many) for comparison.
class IdentificatedGeneric<S> extends Array<S> {
    public id: string;

    public constructor(id: string) {
        super(); // Constructor from derived classes must contain a super called.
        this.id = id;
    }
}

function concatenate<S, T1 extends IdentificatedGeneric<S>>(list1: T1, list2: T1): T1 {
    if (list1.id === list2.id) {
        return [...list1, ...list2] as T1;
    }

    throw Error("Must be the same id");
}

const l1 = new IdentificatedGeneric<string>("l1");
const l2 = new IdentificatedGeneric<string>("l2");
const l3 = new IdentificatedGeneric<string>("l1");
const l4 = new IdentificatedGeneric<string>("l2");

l1.push("1", "2");
l2.push("100", "200");
// l3.push(5, 6);
l4.push("500", "600");

console.log("concatenate =>", concatenate(l1, l3));