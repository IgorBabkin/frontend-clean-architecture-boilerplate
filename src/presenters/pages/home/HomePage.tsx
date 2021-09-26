import React, { FunctionComponent } from 'react';
import { TodoList } from './TodoList';
import { useDependency } from 'react-clean-reactive-architecture';
import { ILogger, ILoggerKey } from '../../../domain/ILogger';

export const HomePage: FunctionComponent = () => {
  const logger = useDependency<ILogger>(ILoggerKey);
  return (
    <div>
      <a href='#about'>About</a>
      <TodoList />
    </div>
  );
};
