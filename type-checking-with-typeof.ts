(() => {
    // Type checking with typeof

    // Compares interface and classes
    class MyClass {
        private x: string = "value1";
        private y: string = "value2";
    }

    interface Inf1 {
        x: string;
    }

    const data1: Inf1 = {
        x: "Name"
    }

    const myClass = new MyClass();

    console.log("Type Class => ", typeof myClass);
    console.log("Type Interface => ", typeof data1);
})();