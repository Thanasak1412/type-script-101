(() => {
    // Union type
    // It's often used to indicate that a variable can be one type or another
    // Using | (Pipe)
    let u1: string | boolean = true;
    type UStringBoolean = string | boolean;
    let u2: UStringBoolean = true;

    // The Tagged union
    interface TypeA {
        discriminant: "TypeA";
        m0: string;
    }

    interface TypeB {
        discriminant: "TypeB";
        m1: number;
    }

    interface TypeC {
        discriminant: "TypeC";
        m2: boolean;
    }

    function unionWithDiscriminant(p: TypeA | TypeB | TypeC) {
        switch (p.discriminant) {
            case "TypeA":
                console.log("m0 =>", p.m0);
                break;
            case "TypeB":
                console.log("m1 => ", p.m1);
                break;
            case "TypeC":
                console.log("m2 => ", p.m2);
                break;
            default:
                break;
        }
    }

    const typeA: TypeA = {
        discriminant: "TypeA",
        m0: "String"
    }

    const typeB: TypeB = {
        discriminant: "TypeB",
        m1: 100
    }

    unionWithDiscriminant(typeA);
    unionWithDiscriminant(typeB);
})();