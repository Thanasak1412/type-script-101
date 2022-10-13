(() => {
    // Comparing variables
    let value1String: string = "1";
    let value1Number: number = 1;

    if (value1String == value1Number) { // Culprit
        console.log("TypeScript doesn't compile");
    }
})();