export function repeat(n: number): number[] {
  return Array.from(new Array(n)).map((value, index) => index);
}
