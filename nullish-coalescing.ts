(() => {
    // Nullish Coalescing

    // Nullish Coalescing for an object
    interface Option {
        opt1: number;
        opt2: boolean;
    }

    function myFunction(id: number, option?: Option): void {
        const myOption: Option = option ?? { opt1: 10, opt2: true };

        console.log("id => ", id);

        if (myOption.opt2) {
            console.log("myOption => ", myOption.opt1);
        }
    }

    const option: Option = {
        opt1: 100,
        opt2: true,
    }

    const option2: Option = {
        opt1: -100,
        opt2: false,
    }

    const option3: Option = {
        opt1: 100,
        opt2: false,
    }

    myFunction(10);
    myFunction(100, option);
    myFunction(1000, option3);
    myFunction(-100, option2);


    // Is it worth nothing that an alternative to this example
    // is to use a default value instead of an optional one.
    // Fixed!!!
    function myFunction2(id: number, option: Option = { opt1: -100, opt2: false }): void {
        console.log("id => ", id);

        if (option.opt2) {
            console.log("option => ", option.opt1);
        }
    }

    myFunction2(10);



    // Nullish Coalescing for a primitive

    function operation(): number | undefined {
        return Math.random() > 0.5 ? 500 : undefined;
    }

    const op: number = operation() ?? -1;

    console.log("op => ", op);

})();