import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter{
  constructor(public data: number[]){
    super()
  }

  get length(): number {
    return this.data.length;
  }

  compare(lefIndex: number, rightIndex: number): boolean {
    return this.data[lefIndex] > this.data[rightIndex];
  }

  swap(lefIndex: number, rightIndex: number): void {
    const leftHand = this.data[lefIndex];
    this.data[lefIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}