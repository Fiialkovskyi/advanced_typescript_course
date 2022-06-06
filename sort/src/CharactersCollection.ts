import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter {
  constructor(public data: string){
    super();
  }

  get length(): number {
    return this.data.length
  }

  compare(lefIndex: number, rightIndex: number): boolean {
    return this.data[lefIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
  }

  swap(lefIndex: number, rightIndex: number): void {
    const characters = this.data.split('');
    const leftHand = characters[lefIndex];

    characters[lefIndex] = characters[rightIndex]
    characters[rightIndex] = leftHand;

    this.data = characters.join('');
  }
}