class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfAnyting<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

new ArrayOfAnyting<number>([1, 2, 3]);

// example of generics with functions
function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printAnyting<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnyting<number>([1, 2, 3]);

// Generic Constraints
class Human {
  print(): void {
    console.log("I am a human");
  }
}

class Robot {
  print(): void {
    console.log("I am a robot");
  }
}

interface Printable {
  print(): void;
}

function printAnyting1<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printAnyting1([new Human(), new Human()]);
printAnyting1([new Robot(), new Robot()]);
