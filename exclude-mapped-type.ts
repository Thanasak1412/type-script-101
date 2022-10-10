// Exclude => Exclude takes all the properties from a types and removes the specified one.
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

interface Human2 {
    name: string;
    gender: boolean;
    intelligenceScore: number;
}

type LivingThing = Exclude<keyof Animal, "sound">;
// type Exclude<T, U> = T extends U ? never : T;
// T(name) = U(sound) = T
// T(gender) = U(sound) = T
// T(sound) = U(sound) = never
type LivingThing2 = Exclude<keyof Human, "nickname">;
// type Exclude<T, U> = T extends U ? never : T;
// T(name) = U(nickname) = T
// T(gender) = U(gender) = T
// T(nickname) = U(nickname) = never

function sayMyName(who: Record<LivingThing, string>): void {
    console.log(`${who.name} is of type ${who.gender}`);
}

const lion: Animal = {
    name: "Lion",
    gender: "Male",
    sound: "Rawwwwhhh"
}
const john: Human = {
    name: "John Doe",
    gender: "Boy",
    nickname: "John"
}

sayMyName(lion);
sayMyName(john);

interface NoisyLivingSpecies {
    sound: string;
}

type LivingThing3 = Exclude<keyof Animal, keyof NoisyLivingSpecies>;
type HumanWithoutNickname = Pick<Human2, LivingThing3>; // Pick From T, pick a set of properties whose keys are in the union K