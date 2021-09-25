import { ICommand } from 'clean-reactive-architecture';
import { inject } from '../../di/decorators';
import { IFilterParams, ITodoStore, ITodoStoreKey } from '../../domain/ITodoStore';
import { ITodoRepository, ITodoRepositoryKey } from '../../domain/ITodoRepository';

export class FilterTodoList implements ICommand {
  constructor(
    @inject(ITodoStoreKey) private todoStore: ITodoStore,
    @inject(ITodoRepositoryKey) private todoRepository: ITodoRepository,
  ) {}

  async execute(params: Partial<IFilterParams>): Promise<void> {
    this.todoStore.setFilter(params);
  }
}
