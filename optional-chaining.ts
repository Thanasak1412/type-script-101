(() => {
    // Optional Chaining and Optional Element access

    // Optional Chaining
    interface MyType {
        level1?: {
            level2?: {
                level3?: {
                    name: string;
                }
            }
        }
    }

    const type1: MyType = {
        level1: {
            level2: {
                level3: {
                    name: "Type 1"
                }
            }
        }
    }

    console.log("type1 => ", type1.level1?.level2?.level3?.name);



    // Accessing optional elements
    interface MyType2 {
        option: (s: string) => void;
    }

    const myType: MyType2 = {
        option: (s: string) => { console.log("Run", s); }
    }

    function execute(name: string, option?: MyType2) {
        option?.option(name);
    }

    execute("myType");
    execute("MyName", myType);

})();