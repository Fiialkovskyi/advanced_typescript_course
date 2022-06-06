var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var DecoratedCar = /** @class */ (function () {
    function DecoratedCar() {
        this.color = "white";
    }
    Object.defineProperty(DecoratedCar.prototype, "formattedColor", {
        get: function () {
            return "This car has ".concat(this.color, " color");
        },
        enumerable: false,
        configurable: true
    });
    DecoratedCar.prototype.drive = function () {
        throw new Error("error");
        console.log("Im driving");
    };
    __decorate([
        logError
    ], DecoratedCar.prototype, "drive");
    return DecoratedCar;
}());
function logError(target, key, desc) {
    var method = desc.value;
    try {
        method();
    }
    catch (e) {
        console.log("Darn! The car is crashed");
    }
}
