(() => {
    // Const Assertion for literal values
    // as const keyword
    const v1 = 10;
    // v1 = 10; // Does not compile because assignable to constant variable
    let v2 = 10 as const; // allowing the value to be changed. But, this change is done only to the literal type
    // v2 = 1000 // Does not compile because literal type (10 type), it's 1000 type
    v2 = 10; // Fixed!

    // Array as Const
    // Using const created an object that cannot be re-assigned, but can change in term of the values.
    const arr = [1, 2, 3];
    arr.push(10);
    console.log("arr => ", arr);

    // More convoluted way to arrays readonly
    let myArr2: readonly [1, 2, 3] = [1, 2, 3];
    // Or
    let myArr3: readonly [1, 2, 3];
    myArr2 = [1, 2, 3];
    // But not
    // myArr2 = [1, 2]

    // Object as Const
    let person = {
        id: 1,
        name: {
            first: "Patrick",
            last: "Desjardins",
            middleName: null
        },
        location: {
            country: "USA",
            state: "CA"
        },
        relatives: [
            {
                id: 2,
                name: {
                    first: "Person2",
                    last: "Person22",
                    middle: "Mid"
                }
            }
        ]
    } as const

    // person.relatives.push({ id: 2, name: { first: "New", last: "New", middle: "" } }); // Does not compile
    // person.id = 10; // Does not compile

    let person2 = {
        id: 1,
        name: {
            first: "Patrick",
            last: "Desjardins",
            middleName: null
        },
        location: {
            country: "USA",
            state: "CA"
        },
        relatives: [
            {
                id: 2,
                name: {
                    first: "Person2",
                    last: "Person22",
                    middle: "Mid"
                }
            }
        ]
    }

    // Allow you to push or alter the collection
    person2.relatives.push({ id: 2, name: { first: "New", last: "New", middle: "" } });
    person2.id = 10;
})();