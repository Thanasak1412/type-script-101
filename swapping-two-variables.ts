(() => {
    // Swapping two variables
    let swap1: number = 1;
    let swap2: number = 2;

    [swap1, swap2] = [swap2, swap1];

    console.log("swap1 => ", swap1);
    console.log("swap2 => ", swap2);
})();