(() => {
    // Assertion function
    function isLengthRangeString(val: any, min: number, max: number): asserts val is String {
        if (typeof val !== "string") {
            throw Error("String required");
        }

        let len = val.length;

        if (len < min || len > max) {
            throw Error(`String is not in the range of ${min} and ${max}`);
        }
    }

    function getLength(str: string, min: number): number {
        isLengthRangeString(str, min, 15);

        return str.length;
    }

    console.log(getLength("This is a books", 10));
    console.log(getLength("pen", 15));
    console.log(getLength("This is a keyboard", 30));
})();