import { IDisposable, ILogger } from '../application';

export class Logger implements ILogger, IDisposable {
  constructor(private prefix: string) {}

  log(...args: unknown[]): void {
    console.log(this.prefix, ...args);
  }

  dispose(): void {
    console.log('logger:disposed');
  }
}
