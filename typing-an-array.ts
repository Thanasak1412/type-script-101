(() => {
    // Typing an array

    // Nested array type
    const arr: (Date | string[])[] = [new Date(), new Date(), ["ABC", "DEF"]];

    console.log("arr => ", arr);

    // Generic arrays
    // For an array of type
    function action<T>(option: T[]): T[] {
        return option;
    }
    // Same
    function action2<T>(option: Array<T>): void { }

    type MultipleType = string | number | boolean;

    console.log(action<MultipleType>(["ABC", 123, true, false]));
})();