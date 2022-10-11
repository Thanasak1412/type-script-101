(() => {
    // Conditional type

    // Using the conditional type with the dynamic number type
    interface TypeA {
        kind: "TypeA";
        m1: number;
    }

    interface TypeB {
        kind: "TypeB";
        m2: number;
    }

    function fct<T extends TypeA | TypeB>(obj: T): T extends TypeA ? TypeB : TypeA {
        return obj as never; // Won't be never.
    }

    const typeA: TypeA = {
        kind: "TypeA",
        m1: 100
    };

    const returnA: TypeB = fct(typeA);

    console.log("returnA => ", returnA);

    // Using the conditional type with the generic
    type NotExceptUndefined<T> = T extends undefined ? never : T;

    function printEverythingExceptNotUndefined<T>(x: NotExceptUndefined<T>) {
        console.log("x => ", x);
    }

    const x1: string = "123";
    const x2: undefined = undefined;

    printEverythingExceptNotUndefined(x1);
    // printEverythingExceptNotUndefined(x2);

    const obj = {
        name: "Thanasak",
    }["name"];

    console.log("obj => ", obj);

    // Nest conditional type
    type RemoveBoolean<T> = {
        [Key in keyof T]: boolean extends T[Key] ? never : Key
    }[keyof T];

    interface Inf1 {
        m1: string;
        m2: number;
        m3: boolean;
    }

    type RemoveBooleanWithMembers<P> = {
        [Key in RemoveBoolean<P>]: P[Key]
    };

    type NoBooleanType = RemoveBooleanWithMembers<Inf1>;

})();