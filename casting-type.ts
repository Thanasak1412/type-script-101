(() => {
    // Casting to Change type

    // Two ways to cast
    const cast1: number = <number>1;
    const cast2: number = 123 as number;

    // The danger of casting
    // You can have an interface that requires many fields
    // and cast an empty object lto that interface, and it will compile
    // event if you do not have the members.

    interface Cast1 {
        m1: string;
    }

    interface Cast2 {
        m1: string;
        m2: string;
    }

    let icast1: Cast1 = {
        m1: "m1"
    }

    let icast2: Cast2 = {
        m1: "m1",
        m2: "m2"
    }

    let icast3: Cast1 = icast2;
    // let icast4: Cast2 = icast1; // Does not work, missing a member

    let icast4: Cast1 = icast1 as Cast2;

    console.log("icast4 => ", icast4);
})();