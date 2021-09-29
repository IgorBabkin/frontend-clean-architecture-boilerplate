import { ICommand } from 'clean-use-case';
import { inject } from '../../decorators';
import { ITodoStore, ITodoStoreKey } from '../../domain/todo/ITodoStore';
import { ITodoRepository, ITodoRepositoryKey } from '../../domain/todo/ITodoRepository';

export class DeleteTodo implements ICommand {
  constructor(
    @inject(ITodoStoreKey) private todoStore: ITodoStore,
    @inject(ITodoRepositoryKey) private todoRepository: ITodoRepository,
  ) {}

  async execute(id: string): Promise<void> {
    await this.todoRepository.delete(id);
    this.todoStore.deleteTodo(id);
  }
}
