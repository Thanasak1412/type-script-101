// Extract => Extract from T those types that are assignable to U
interface Animal {
    name: string;
    gender: string;
    sound: string;
}

interface Human {
    name: string;
    gender: string;
    nickname: string;
}

type LivingThing = Extract<keyof Animal, keyof Human>;

function sayMyName(who: Record<LivingThing, string>): void {
    console.log(`${who.name} is of type ${who.gender}`);
}

const human: Human = {
    name: "Jacob",
    nickname: "Jaco-bee",
    gender: "Boy"
}

const animal: Animal = {
    name: "Lion",
    sound: "Rawwwwhh",
    gender: "Male"
}

sayMyName(human);
sayMyName(animal);