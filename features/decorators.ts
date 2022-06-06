@classDecorator
class DecoratedCar {
  @testDecorator
  color: string = "white";

  @testDecorator
  get formattedColor(): string {
    return `This car has ${this.color} color`;
  }

  @logError("OOps! The car is crashed")
  drive(
    @parameterDecorator speed: string,
    @parameterDecorator isStopped: boolean
  ): void {
    if (speed === "fast") {
      console.log("Vrooom");
    } else {
      console.log("Im driving");
    }
  }
}

function testDecorator(target: any, key: string) {
  console.log("key", key);
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

function classDecorator(constructor: typeof DecoratedCar) {
  console.log(constructor);
}

function logError(errorMessage: string) {
  return function logError(
    target: any,
    key: string,
    desc: PropertyDescriptor
  ): void {
    const method = desc.value;

    try {
      method();
    } catch (e) {
      console.log(errorMessage);
    }
  };
}
