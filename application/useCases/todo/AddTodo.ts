import { inject } from '../../decorators';
import { ITodoStore, ITodoStoreKey } from '../../domain/todo/ITodoStore';
import { ITodoState } from '../../domain/todo/ITodo';
import { Action, IAction } from 'clean-use-case';
import { ITodoRepository, ITodoRepositoryKey } from '../../domain/todo/ITodoRepository';
import { Todo } from '../../domain/todo/Todo';

export const IAddTodoActionKey = Symbol.for('IAddTodoAction');
export interface IAddTodo extends IAction<ITodoState> {}

export class AddTodo extends Action<ITodoState> implements IAddTodo {
  constructor(
    @inject(ITodoStoreKey) private todoStore: ITodoStore,
    @inject(ITodoRepositoryKey) private todoRepository: ITodoRepository,
  ) {
    super();
  }

  protected async handle(payload: ITodoState): Promise<void> {
    const todo = new Todo(payload);
    await this.todoRepository.addTodo(todo);
    this.todoStore.addTodo(todo);
  }
}
