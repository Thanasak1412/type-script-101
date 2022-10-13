(() => {
    // Type checking with instanceof

    // instanceof with classes
    class C1 { m1!: string; }
    class C2 extends C1 { m2!: string; }

    const c2 = new C2();

    if (c2 instanceof C1) {
        console.log("C2 is an instance of c1");
    }

    if (c2 instanceof C2) {
        console.log("C2 is an instance of c2");
    }

    // Even if the two classes have the same structure
    // they are distinct with instanceof
    class D1 { }
    class D2 { }

    const d1 = new D1();

    if (d1 instanceof D2) {
        console.log("d1 is an instance of D2")
    }

    if (d1 instanceof D1) {
        console.log("d1 is an instance of D1");
    }

})();