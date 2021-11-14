import { LocatorContext, useScope } from 'react-ts-ioc-container';
import React, { PropsWithChildren, useMemo } from 'react';
import { LocatorOptions } from 'react-ts-ioc-container/cjm/locator';
import { IScopeContextKey } from './IScopeContextKey';

type Props<T> = LocatorOptions & {
  context?: T;
};

export function Scope<T>({ children, tags, context }: PropsWithChildren<Props<T>>): JSX.Element {
  const scope = useScope(tags);
  return (
    <LocatorContext.Provider value={useMemo(() => scope.register(IScopeContextKey, context), [scope, context])}>
      {children}
    </LocatorContext.Provider>
  );
}
