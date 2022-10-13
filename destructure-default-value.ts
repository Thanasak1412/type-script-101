(() => {
    // Destructure and default values
    interface Obj {
        prop1: string;
        prop2: number;
        prop3: boolean;
    }

    const obj: Obj = {
        prop1: "abc",
        prop2: 123,
        prop3: true
    }

    const { prop1, prop2: prop3 = "123" } = obj;

    console.log("prop3 => ", prop3);
})();