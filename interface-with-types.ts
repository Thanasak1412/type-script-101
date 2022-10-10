(() => {
    // Intersecting with Types, Interfaces, and Generics

    // Using an ampersand &
    interface T1 {
        x: string;
    }

    interface T2 {
        y: number;
    }

    interface T3 {
        z: boolean;
    }

    type Intersect = T1 & T2 & T3;

    const intersect: Intersect = {
        x: "Thanasak",
        y: 10,
        z: false,
    }

    console.log("intersect => ", intersect);

    // Inherit, using extends keyword
    // The inheritance of interfaces, would be require creating additional interfaces to inherit the existing interface
    interface combineInterface extends T1, T2, T3 { }

    // Intersect and generic types can be combined to give flexibility
    function intersectGeneric<TT1, TT2>(t1: TT1, t2: TT2): TT1 & TT2 {
        let returnValue = <TT1 & TT2>{};

        for (let index in t1) {
            (returnValue as TT1)[index] = t1[index];
        }
        for (let index in t2) {
            (returnValue as TT2)[index] = t2[index];
        }

        return returnValue;
    }
})();