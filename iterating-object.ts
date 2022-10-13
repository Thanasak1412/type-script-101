(() => {
    // Iterating an object's

    // Iterating an object's keys with for-in
    const list: (number | string)[] = [1, 2, 3, "a", "b", "c"];

    // get key of object
    for (const i in list) {
        console.log("key => ", i);
    };

    // get value of array, but not work with object
    for (const val of list) {
        console.log("value => ", val);
    };

    list.forEach((val: string | number, i: number, array: (string | number)[]) => {
        console.log("Value => ", val);
        console.log("Index => ", i);
    });

})();