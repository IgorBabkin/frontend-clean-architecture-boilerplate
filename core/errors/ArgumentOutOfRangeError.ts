export class ArgumentOutOfRangeError extends Error {
  constructor(arg: unknown) {
    super(`Arg ${arg} is out of range`);

    Object.setPrototypeOf(this, ArgumentOutOfRangeError.prototype);
  }
}
