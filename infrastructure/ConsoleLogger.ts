import { IDisposable, ILogger } from '../application';
import { level, singleton } from '../application/decorators';

@singleton
@level(1)
export class ConsoleLogger implements ILogger, IDisposable {
  constructor(private prefix: string) {}

  log(...args: unknown[]): void {
    console.log(this.prefix, ...args);
  }

  dispose(): void {
    console.log('logger:disposed');
  }
}
