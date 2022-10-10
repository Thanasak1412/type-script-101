interface Animal {
    name: string;
    age: number;

    maximumDeepness: number;

    numberOfLegs: number;
    canSwim: boolean;
    runningSpeed: number;
}

interface Human {
    name: string;
    age: number;
}

type Fish = Pick<Animal, "name" | "age" | "maximumDeepness">;
type Turtle = Animal;
type Cheetah = Pick<Animal, "name" | "age" | "numberOfLegs" | "runningSpeed">;
type LivingThing = Record<Extract<keyof Animal, keyof Human>, string>;

const fish: Fish = {
    name: "Shark",
    age: 1,
    maximumDeepness: 100,
}

const turtle: Turtle = {
    name: "Red-Eared Slider",
    age: 50,
    maximumDeepness: 20,
    numberOfLegs: 4,
    canSwim: true,
    runningSpeed: 1
}

const cheetah: Cheetah = {
    name: "Acinonyx jubatus hecki",
    age: 10,
    numberOfLegs: 4,
    runningSpeed: 100,
}

const creature: LivingThing = {
    name: "John",
    age: "40",
}

console.log("fish => ", fish);
console.log("turtle => ", turtle);
console.log("cheetah => ", cheetah);
console.log("creature => ", creature);