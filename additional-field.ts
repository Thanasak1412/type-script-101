(() => {
    // Adding an additional field
    interface TypeA {
        name: string;
    }

    interface TypeB {
        id: number;
        name: string;
    }

    function outputInterface(obj: TypeA): void {
        console.log("obj => ", obj);

        if ("id" in obj) {
            console.log("typeB", obj.id); // Don't accessing a property id because don't exist on type TypeA
        } else {
            console.log("typeA", obj.name);
        }
    }

    const typeA: TypeA = {
        name: "TypeA"
    }

    const typeB: TypeB = {
        id: 10,
        name: "TypeB"
    }

    outputInterface(typeA);
    outputInterface(typeB);

})();