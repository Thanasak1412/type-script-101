(() => {
    // Catching asynchronous Exception
    function returnException(): Promise<string> {
        const p = Promise.resolve("value to be in the argument of then");

        throw new Error("Error Message");

        return p;
    }

    async function handleException() {
        try {
            await returnException();
        } catch (error) {
            console.log("Error Message #2", error.message);
        } finally {
            console.log("Always called");
        }
    }

    handleException();
})();