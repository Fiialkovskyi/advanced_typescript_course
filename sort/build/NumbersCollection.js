"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
const Sorter_1 = require("./Sorter");
class NumbersCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(lefIndex, rightIndex) {
        return this.data[lefIndex] > this.data[rightIndex];
    }
    swap(lefIndex, rightIndex) {
        const leftHand = this.data[lefIndex];
        this.data[lefIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    }
}
exports.NumbersCollection = NumbersCollection;
