import { AddTodo, TodoStore } from '../../application';
import { IContainer } from 'ts-ioc-container';
import { ConsoleLogger } from '../../infrastructure/ConsoleLogger';
import { StubTodoRepository } from '../../infrastructure/StubTodoRepository';
import { fromClass } from '../../application/decorators';

export function prodEnv(l: IContainer): IContainer {
  return l
    .register(fromClass(ConsoleLogger).build())
    .register(fromClass(AddTodo).build())
    .register(fromClass(StubTodoRepository).build())
    .register(fromClass(TodoStore).build());
}
