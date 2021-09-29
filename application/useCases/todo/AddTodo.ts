import { inject } from '../../decorators';
import { ITodoStore, ITodoStoreKey } from '../../domain/todo/ITodoStore';
import { ITodo } from '../../domain/todo/ITodo';
import { IAction, Action } from 'clean-use-case';
import { ITodoRepository, ITodoRepositoryKey } from '../../domain/todo/ITodoRepository';

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
