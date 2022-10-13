(() => {
    // Generic types and aliases

    // generic type with interface
    interface Car<TOption> {
        name: string;
        option: TOption;
    }

    interface Cat2<TOption> {
        name: string;
        option: TOption;
    }

    // Recursive type with aliases
    type Group = {
        name: string;
        child?: Group
    }

    const groupItem: Group = {
        name: "group",
        child: {
            name: "groupItem1",
            child: {
                name: "groupExtraItem1"
            }
        }
    }

    console.log("groupItem => ", groupItem);


    // Type intersect
    type Person = {
        firstName: string;
        lastName: string;
    }

    type Group2 = {
        name: string;
    }

    type Child<T> = {
        child: T;
    }

    type PersonGroupWithChild = Group2 & Person & Child<Person>;

    const person: PersonGroupWithChild = {
        name: "GroupName",
        firstName: "First",
        lastName: "Last",
        child: {
            firstName: "Child First",
            lastName: "Child Last"
        }
    }

    console.log(person);

})();