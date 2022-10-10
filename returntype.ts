(() => {
    // Extracting the return type of a function
    function getName(): { firstName: string, lastName: string } {
        return {
            firstName: "John",
            lastName: "Doe",
        }
    }

    type FunctionType = ReturnType<typeof getName>;

    const name: FunctionType = {
        firstName: "First",
        lastName: "Last"
    }

    console.log("string", name);

    // ReturnType with many return types
    function getSomething() {
        if (Math.random() < 0.5) {
            return {
                cond: "Under 0.5",
                typescript: true,
            }
        }
        return {
            cond: 1,
            typescript: "3.7",
            moreField: true
        }
    }

    type FunctionType2 = ReturnType<typeof getSomething>;

    function getSomething2() {
        if (Math.random() < 0.5) {
            return 1;
        }
        return "1";
    }

    type FunctionTyp3 = ReturnType<typeof getSomething2>;

    // ReturnType with asynchronous functions
    async function returnAsyncFunction() {
        return await Math.random();
    }

    type function4 = ReturnType2<typeof returnAsyncFunction>;

    // First checking: checking whether a Promise<T>
    // is true return U => type of a Promise
    // is false return T => Promise<T>
    type ReturnType2<T> = T extends Promise<infer U> ? U : T;
})();