import { inject } from '../../decorators';
import { ITodoStore, ITodoStoreKey } from '../../domain/ITodoStore';
import { ITodo } from '../../domain/ITodo';
import { IAction, Action } from 'clean-reactive-architecture';
import { ITodoRepository, ITodoRepositoryKey } from '../../domain/ITodoRepository';

export const IAddTodoActionKey = Symbol.for('IAddTodoAction');
export interface IAddTodo extends IAction<ITodo> {}

export class AddTodo extends Action<ITodo> implements IAddTodo {
  constructor(
    @inject(ITodoStoreKey) private todoStore: ITodoStore,
    @inject(ITodoRepositoryKey) private todoRepository: ITodoRepository,
  ) {
    super();
  }

  protected async handle(payload: ITodo): Promise<void> {
    await this.todoRepository.addTodo(payload);
    this.todoStore.addTodo(payload);
  }
}
