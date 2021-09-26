import { inject } from '../../decorators';
import { ITodoStore, ITodoStoreKey } from '../../domain/ITodoStore';
import { ICommand } from 'clean-reactive-architecture';
import { ITodoRepository, ITodoRepositoryKey } from '../../domain/ITodoRepository';

export class LoadTodoList implements ICommand {
  constructor(
    @inject(ITodoStoreKey) private todoStore: ITodoStore,
    @inject(ITodoRepositoryKey) private todoRepository: ITodoRepository,
  ) {}

  async execute(): Promise<void> {
    const todos = await this.todoRepository.fetchAll();
    this.todoStore.setTodos(todos);
  }
}
