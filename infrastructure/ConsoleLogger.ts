import { IDisposable, ILogger, ILoggerKey } from '../application';
import { argsFn, keys, level, singleton } from '../application/decorators';

@keys(ILoggerKey)
@argsFn(() => ['root'])
@singleton
@level(0)
export class ConsoleLogger implements ILogger, IDisposable {
  constructor(private prefix: string) {}

  log(...args: unknown[]): void {
    console.log(this.prefix, ...args);
  }

  dispose(): void {
    console.log('logger:disposed');
  }
}
