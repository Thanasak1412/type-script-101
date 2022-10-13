(() => {
    // Type checking an interface with custom User-Defined type guard

    // user-defined function
    interface Person {
        firstName: string;
        lastName: string;
    }

    interface Animal {
        name: string;
        numberOfLegs: number;
    }

    function isPerson(obj: any): obj is Person {
        return obj.firstName !== undefined && obj.lastName !== undefined;
    }

    function show(p: Person | Animal): void {
        if (isPerson(p)) {
            console.log(`First name = ${p.firstName}, Last name = ${p.lastName}`);
        } else {
            console.log(`This is name of animal = ${p.name}`);
        }
    }

    const p1: Person = {
        firstName: "John",
        lastName: "Doe",
    }

    const p2: Animal = {
        name: "Cat",
        numberOfLegs: 4
    }

    show(p1);
    show(p2);



    // User-defined function with the in keyword
    function showWithInKeyword(p: Person | Animal): void {
        if ("firstName" in p) {
            console.log(`It's a person with a first name: ${p.firstName}, and last name: ${p.lastName}`);
        } else {
            console.log(`It's an animal: ${p.name}`);
        }
    }

    showWithInKeyword(p1);
    showWithInKeyword(p2);

})();