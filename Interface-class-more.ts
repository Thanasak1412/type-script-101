// Interfaces, Classes and More

// Interface => interface is not an object, so we use ; and not ,
interface Car {
  wheels: number;
  color: string;
  brand: string;
}

// We can also set optional properties like this
interface Member {
  userName: string;
  firstName: string;
  lastName: string;
  age: number;
  address: object;
  isMarried?: boolean;
}

// Maybe we don't want certain properties to be editable
// after the creation of the object, in that case we can mark
// them as read only.
interface Book {
  readonly price: number;
  name: string;
  hasStore?: boolean;
}

// We can also create the shape for functions with interfaces, not just objects.
interface Greet {
  (greeting: string, name: string): string;
}

let greetingFunction: Greet;

// // ❎
// // Type '(greeting: string, name: string, age: number) => string' is not assignable to type 'Greet'
// greetingFunction = (greeting: string, name: string, age: number): string => {
//   console.log(`${greeting} ${name}`);

//   return `${greeting} ${name}`;
// };

// ✅
greetingFunction = (greeting: string, name: string): string => {
  console.log`${greeting} ${name}`;

  return `${greeting} ${name}`;
};

// Extending interfaces
// An interface can extend another interface and inherit the members
// of the previous one
interface Vehicle {
  wheels: number;
  color: string;
}

interface Airplane extends Vehicle {
  wings: number;
  rotors: number;
}

// Classes
class Animal {
  public eat = () => {
    console.log("gnam gnam");
  };

  public sleep = () => {
    console.log("zzzz");
  };
}

class Human extends Animal {
  private work = () => {
    console.log("zzzzzzzzzzzzzzzz");
  };
}

const me = new Human();
// me.work(); // Property 'work' is private and only accessible within class 'Human'
me.eat();
me.sleep();

//Intersection Types and Union Types

// Intersection Types
interface Person {
  sex: "male" | "female" | "N/A";
  age: number;
}

interface WorkerAdult {
  job: string;
}

type Adult = Person & WorkerAdult;

const person1: Adult = {
  sex: "male",
  age: 27,
  job: "software developer",
};

console.log("person1", person1);

interface Kid {
  age: number;
  job: string;
}

interface Young {
  age: number;
  job: string;
}

function person(): Kid | Young {
  return {
    age: 27,
    job: "farmer",
  };
}

const person2 = person();
person2.age;
person2.job;