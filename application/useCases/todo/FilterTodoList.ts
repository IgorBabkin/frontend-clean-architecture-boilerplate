import { ICommand } from 'clean-use-case';
import { inject } from '../../decorators';
import { IFilterParams, ITodoStore, ITodoStoreKey } from '../../domain/todo/ITodoStore';
import { ITodoRepository, ITodoRepositoryKey } from '../../domain/todo/ITodoRepository';

export class FilterTodoList implements ICommand {
  constructor(
    @inject(ITodoStoreKey) private todoStore: ITodoStore,
    @inject(ITodoRepositoryKey) private todoRepository: ITodoRepository,
  ) {}

  async execute(params: Partial<IFilterParams>): Promise<void> {
    this.todoStore.setFilter(params);
  }
}
