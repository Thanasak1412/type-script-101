interface Cat {
    age: number;
    weight: number;
    numberOfKitty: number;
}

const cat1: Cat = {
    age: 5,
    weight: 20,
    numberOfKitty: 0
}

type NullableCat = {
    [P in keyof Cat]: Cat[P] | null;
}

const cat2: NullableCat = {
    age: 3,
    weight: null,
    numberOfKitty: null
}