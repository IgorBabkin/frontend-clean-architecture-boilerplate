import { ILogger } from '../domain/ILogger';

export class Logger implements ILogger {
  constructor(private prefix: string) {}

  log(...args: unknown[]): void {
    console.log(this.prefix, ...args);
  }
}
