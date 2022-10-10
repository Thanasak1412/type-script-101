(() => {
    // Using conditional type

    // The extends keyword
    // constraints are expressed using the extends keyword.
    // T extends K = assume that a value of type T = type K
    // e.g., 0 extends number because var zero: number = 0
    type StringFromType<T> = T extends string ? 'string' : never;

    type lorem = StringFromType<'lorem'>; // string
    type ten = StringFromType<10>; // never

    // The infer keyword
    // allows us to define a variable within a constraint to be referenced or returned
    type ReturnType<T> = T extends (...arg: any[]) => infer R ? R : any;

    type a = ReturnType<() => void>;
    type b = ReturnType<() => string | number>;
    type c = ReturnType<() => any>
})();