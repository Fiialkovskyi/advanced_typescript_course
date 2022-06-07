import "reflect-metadata";

@printMetadata
class Car {
  color: string = "black";

  @markFunction("Big secret")
  drive(): void {
    console.log("I am diving");
  }
}

function markFunction(secretInfo: string) {
  return function (target: Car, key: string) {
    Reflect.defineMetadata("info", secretInfo, target, key);
  };
}

function printMetadata(target: typeof Car) {
  for (let key in target.prototype) {
    const info = Reflect.getMetadata("info", target.prototype, key);
    console.log(info);
  }
}

// const box = {
//   color: "black",
// };

// //Metadata for object

// Reflect.defineMetadata("note", "hello", box);
// Reflect.defineMetadata("width", 30, box);

// const note = Reflect.getMetadata("note", box);
// const width = Reflect.getMetadata("width", box);

// console.log(note, width);

// // Metadata for object property
// Reflect.defineMetadata("note", "hello", box, "color");

// const noteInProperty = Reflect.getMetadata("note", box, "color");

// console.log(noteInProperty);
