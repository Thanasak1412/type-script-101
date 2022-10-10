(() => {
    // Custom Mapped Type

    // Creating a "NonNullable" type
    type NoNullValue<T> = T extends null | undefined ? never : T;

    function print<T>(arg: NoNullValue<T>): void {
        console.log(`Argument is ${arg}`);
    }

    print("Name");
    // print(null); // does not compile because type value is null
    // print(undefined); // does not compile because type value is undefined
    print("");

    // Adding a property conditionally
    interface Person {
        name: string;
        dateCreated: Date;
    }

    interface Animal {
        name: string;
    }

    // Create a generic type that add modifiedDate only if dateCreated is present
    type Modified<T> = T extends { dateCreated: Date } ? T & { modifiedDate: Date } : never;

    const p: Person = {
        name: "John",
        dateCreated: new Date()
    }

    const a: Animal = {
        name: "Shark"
    }
    // ModifiedDate present because 'Person' has dateCreated
    const john: Modified<Person> = {
        ...p,
        modifiedDate: new Date()
    }

    console.log("John", john);

    // Following line do not transpile because Animal does not have dateCreated
    const shark: Modified<Animal> = {
        ...a,
        modifiedDate: new Date()
    }
    console.log("Shark", shark);
})();