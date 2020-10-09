const arrayNumber: Array<number> = [1, 2, 3, 4, 5];
const arrayString: Array<string> = ["1", "2", "3", "4", "5"];

function reverse<T>(arr: T[]): T[] {
  return arr.reverse();
}

reverse(arrayNumber);
reverse(arrayString);