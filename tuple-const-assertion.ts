(() => {
    // Tuple for type and length arrays

    let myTuple: [number, string] = [10, "Name"];

    console.log("myTuple => ", myTuple);

    // Transpilation effect
    let myTuple2: [number, string];
    myTuple2 = [1, "test"];

    // myTuple2[3] = "one more";

    // Readonly Tuple
    let firstTuple: readonly [number, string] = [1, "name"];
    let secondTuple: Readonly<[number, string]> = [120, "MyName"];
    // secondTuple[0] = 130; Can't assign to '0' because it is a read-only property
    let thirdTuple = [1, "ThirdTuple"] as const;
})();