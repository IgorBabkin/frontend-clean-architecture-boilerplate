export const ILoggerKey = Symbol.for('ILogger');
export interface ILogger {
  log(...args: unknown[]): void;
}
