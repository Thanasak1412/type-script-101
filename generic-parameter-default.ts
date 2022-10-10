// Generic parameter defaults
interface MyGenericWithDefault<T = string> {
    myTypeWhichIsStringIfNotSpecified: T;
}

const generic1: MyGenericWithDefault = { myTypeWhichIsStringIfNotSpecified: "1" };
const generic2: MyGenericWithDefault<number> = { myTypeWhichIsStringIfNotSpecified: 123 };
const generic3: MyGenericWithDefault<string> = { myTypeWhichIsStringIfNotSpecified: "String" };

interface GenericWithDefault<T = string> { } // Doesn't compile because default types can only used after required types.
// There is a special case with generic and interfaces. Interfaces defined in two difference places
// bring the optional value from one interface into the second ont while the schema is being merged. 