(() => {
    // Set and Dictionary

    // Index Signature
    interface Person {
        firstName: string;
        lastName: string;
        age: number;
    }

    interface PersonDictionary<T> {
        [id: number]: T;
    }

    const person: PersonDictionary<Person> = {
        [1]: {
            firstName: "Thanasak",
            lastName: "Srisaeng",
            age: 24
        },
        [2]: {
            firstName: "Test",
            lastName: "Test",
            age: 12
        }
    }

    console.log("person", person[1].firstName);


    // Map
    interface Person2 {
        id: number;
        name: string;
    }

    const person2 = new Map<Number, Person2>;

    person2.set(1, { id: 1, name: "Thanasak" });
    person2.set(2, { id: 2, name: "John" });

    if (person2.has(2)) {
        console.log(person2.get(2)!.name);
    }

})();