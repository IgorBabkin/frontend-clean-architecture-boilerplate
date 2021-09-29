import { Saga } from 'clean-use-case';
import { inject } from '../../decorators';
import { IAddTodo, IAddTodoActionKey } from './AddTodo';
import { Subscription } from 'rxjs';

export class TodoNotificationSaga extends Saga {
  constructor(@inject(IAddTodoActionKey) private addTodoAction: IAddTodo) {
    super();
  }

  protected onInit(subscriptions: Subscription[]): void {
    subscriptions.push(this.addTodoAction.done$.subscribe(() => console.log('Added new todo')));
  }
}
