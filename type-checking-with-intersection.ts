(() => {
    // Type checking with intersection
    type SupportCurrencies = "USD" | "CDN";
    interface Branded<T extends SupportCurrencies> {
        kind: T;
    }

    function getMoney<T extends SupportCurrencies>(amount: number) {
        return amount as number & Branded<T>
    }

    const money1 = getMoney<"USD">(10);
    const money2 = getMoney<"CDN">(20);
    // const money3 = getMoney<"BATH">(200); Type '"BATH"' does not satisfy the constraint 'SupportCurrencies'.

})();