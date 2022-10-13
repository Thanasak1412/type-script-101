(() => {
    // Aliases with Type

    // Alias with a function type

    // Example #1
    type Code = (id: number, name: string) => boolean;
    type ErrorCallback = (message: string) => void;

    function execute(code: Code, error: ErrorCallback): void {
        if (!code(1, "Name1")) {
            error("Does not work");
        }
    }

    const code: Code = (id: number, name: string) => {
        return false;
    }

    const error: ErrorCallback = (message: string) => {
        console.log("Message => ", message);
    }

    execute(code, error);

    // Example #2
    type Name = string;
    type DynamicName = () => string;
    type NameFinder = Name | DynamicName;

    function getName(name: NameFinder): Name {
        if (typeof name === "string") {
            return name;
        }

        return name();
    }

    console.log("function getName => ", getName("Name1"));
    console.log("function getName => ", getName(() => Math.random() > 0.5 ? "Random1" : "Random2"));

})();