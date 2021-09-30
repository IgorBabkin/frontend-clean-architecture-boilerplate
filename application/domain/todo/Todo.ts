import { ITodo, ITodoSearchOptions, ITodoState } from './ITodo';

export class Todo implements ITodo {
  public id: string;
  public message: string;
  public priority: number;
  public title: string;

  constructor({ id, message, title, priority }: ITodoState) {
    this.id = id;
    this.message = message;
    this.title = title;
    this.priority = priority;
  }

  hasPriorityBetween([min, max]: [number, number]): boolean {
    return min <= this.priority && this.priority <= max;
  }

  hasText(text: string, options: ITodoSearchOptions): boolean {
    const title = options.caseSensitive ? this.title : this.title.toLowerCase();
    const message = options.caseSensitive ? this.message : this.message.toLowerCase();
    const searchText = options.caseSensitive ? text : text.toLowerCase();
    return message.search(searchText) !== -1 || title.search(searchText) !== -1;
  }

  getState(): ITodoState {
    return { id: this.id, priority: this.priority, title: this.title, message: this.message };
  }
}
