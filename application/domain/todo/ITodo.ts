export interface ITodoState {
  id: string;
  title: string;
  message: string;
  priority: number;
}

export interface ITodoSearchOptions {
  caseSensitive: boolean;
}

export interface ITodo {
  id: string;
  title: string;
  message: string;
  priority: number;

  hasText(text: string, options: ITodoSearchOptions): boolean;

  hasPriorityBetween(range: [number, number]): boolean;

  getState(): ITodoState;
}
