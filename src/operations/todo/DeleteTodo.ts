import { ICommand } from 'clean-reactive-architecture';
import { inject } from '../../decorators';
import { ITodoStore, ITodoStoreKey } from '../../domain/ITodoStore';
import { ITodoRepository, ITodoRepositoryKey } from '../../domain/ITodoRepository';

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
