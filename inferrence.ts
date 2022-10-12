(() => {
    // TypeScript inference
    type GetReturnType<T> = T extends (...arg: any[]) => infer R ? R : T;

    function whatIsMyReturnType(): string {
        return "1";
    }

    type TypeFromReturn = GetReturnType<typeof whatIsMyReturnType>;

    const dynamicallyTyped: TypeFromReturn = "1";

    // Combined Type
    type CombinedType<T> = T extends { m1: infer U, m2: infer U } ? U : never;
    type C1 = CombinedType<{ m1: string, m2: number }>; // string | number
    type C2 = CombinedType<{ m1: string, m2: string }>; // string
})();