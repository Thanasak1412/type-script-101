(() => {
    // Asserting untyped code
    function showLandArea(address, x, y) {
        assert(typeof address === "string");
        assert(typeof x === "number");
        assert(typeof y === "number");

        console.log(`The house ${address.substr(10)} as an area of ${x * y} meters`)
    }

    showLandArea("1234 Street ABCDE", 10, 5);
    showLandArea("1234 Street ABCDE", "10", "5")
})();