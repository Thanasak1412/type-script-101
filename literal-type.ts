(() => {
    // Literal Type, Narrowing, and Const

    // Literal type sets a single value to a variable's type

    // A first example
    interface Cat {
        kind: "cat"; // Discriminant because shared with Dog
        name: string;
    }

    interface Dog {
        kind: "dog";
        nickname: string;
    }

    function callMeBy(p: Cat | Dog): string {
        if (p.kind === "cat") {
            return p.name;
        } else if (p.kind === "dog") {
            return p.nickname;
        }

        return "Unknown";
    }

    const cat: Cat = {
        kind: "cat",
        name: "Kitty"
    }

    const dog: Dog = {
        kind: "dog",
        nickname: "Snoopy"
    }

    const result = callMeBy(cat);
    const result2 = callMeBy(dog);

    console.log("result => ", result);
    console.log("result2 => ", result2);

    // A second example
    interface Success {
        success: true;
        httpCode: string;
        payload: string;
    }

    interface Failure {
        success: false;
        errorMessage: string;
    }

    function ajax(url: string): Success | Failure {
        return {
            success: false,
            errorMessage: "Error!"
        }
    }

    function ajaxCall(): string {
        const ajaxResult = ajax("http://blablac.com");

        if (ajaxResult.success) {
            return ajaxResult.payload;
        }

        return ajaxResult.errorMessage;
    }

    const resultCall = ajaxCall();

    console.log("resultCall => ", resultCall);

    // Literal type with const
    const literalType1 = "c"; // Type is not string, but "c"
    const literalType2: "c" = "c"; // Same as above
    let literalType3: "c" // Type is string
    let literalType4: "c" = "c" // Type is not string, but 'c'
})();