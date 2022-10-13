(() => {
    // Type checking and Interface with a Discriminator

    // Checking type with literal
    interface Human {
        kind: "human";
        weight: number;
        height: number;
    }

    interface Animal {
        kind: "animal";
        name: string;
    }

    function printData(species: Species): void {
        console.log("species => ", species.kind); // Only kind is available
    }

    type Species = Human | Animal;

    const a: Species = {
        kind: "human",
        weight: 29,
        height: 150
    }

    printData(a);

    // Narrowing down types
    // Narrows down the type to the human interface
    // Thus, has access to all human members

    function printData2(species: Species): void {
        console.log("species => ", species.kind); // Only kind is available

        if (species.kind === "human") {
            console.log(`I am human with the height of ${species.height}`);
        } else {
            console.log(`I am animal with the name of ${species.name}`);
        }
    }

    printData2(a);

    // Inheritance interface
    // Note: it is impossible to have many field with the same name, but with difference types.

    interface SuperHumanAnimal extends Human, Animal {
        // Interface 'SuperHumanAnimal' cannot simultaneously extend types 'Human' and 'Animal'.
        // Named property 'kind' of types 'Human' and 'Animal' are not identical.
    }

})();