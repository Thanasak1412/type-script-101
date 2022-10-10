(() => {
    // Index signature
    // Index signature => accessing an object's member by using []
    let objIndex: { x: number; y: string, z: boolean } = { x: 1, y: "2", z: false };

    objIndex["x"] = 10;
    objIndex["y"] = "name";
    objIndex["z"] = true;
    objIndex["12"] = "Thanasak"
    objIndex[12] = 123;

    console.log("objIndex", objIndex);
    console.log("objIndex[1]", objIndex["12"]);

    interface MyStringDictionaryWithTwoMap {
        [key: number]: string;
        [key: string]: number;
        // [key: string]: number; // Doesn't compile
    }

    // Same type
    // The interface defined by members and an index type
    // that uses a string as the key must have all its members to be of type string
    // Note: the code below throws an error
    interface MyStringDictionaryWithMember {
        [key: string]: string;
        m1: string;
        m2: number; // Won't transpile, must be a string.
    }

    // Fixed!
    interface MyStringDictionaryWithMember2 {
        [key: string]: string;
        m1: string;
        m2: string;
    }

    // Creating an object that is defined with the interface name
    let map: MyStringDictionaryWithMember2 = {
        m1: "Thanasak",
        m2: "Srisaeng",
        ["fullName"]: "Thanasak Srisaeng"
    }

    console.log("map", map);

    // implement the class
    class Map implements MyStringDictionaryWithMember2 {
        [key: string]: string;
        m1: string;
        m2: string;

        constructor() {
            this.m1 = "";
            this.m2 = "";
        }
    }

    let myMap = new Map();

    myMap.m1 = "MyMap";
    myMap.m2 = "YourMap";
    myMap["Who"] = "WhoMap";

    console.log("myMap => ", myMap);

    // Difference types
    // A way to work around this restriction would be have to the index be a union of many types.
    interface differenceType {
        [key: string]: string | number;
        m1: string;
        m2: number;
    }

    // Intersection type
    interface MyStringDictionary {
        [key: string]: string;
        m1: string;
    }

    interface MySecondInterface {
        m2: number;
    }

    type Intersect = MyStringDictionary & MySecondInterface;

    let m: Intersect = {
        m1: "Thanasak",
        m2: 10,
        ["AString"]: "My String"
    }

    console.log("m => ", m);
})();