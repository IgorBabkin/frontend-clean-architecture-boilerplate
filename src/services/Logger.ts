import { ILogger } from '../application/domain/ILogger';
import { IDisposable } from '../application/core/IDisposable';

export class Logger implements ILogger, IDisposable {
  constructor(private prefix: string) {}

  log(...args: unknown[]): void {
    console.log(this.prefix, ...args);
  }

  dispose(): void {
    console.log('logger:disposed');
  }
}
