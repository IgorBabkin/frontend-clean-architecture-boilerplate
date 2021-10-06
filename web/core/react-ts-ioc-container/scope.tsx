import { LocatorContext, useScope } from 'react-ts-ioc-container';
import React, { PropsWithChildren, useEffect } from 'react';
import { LocatorOptions } from 'react-ts-ioc-container/cjm/locator';
import { IScopeContextKey } from './IScopeContextKey';

type Props<T> = LocatorOptions & {
  context?: T;
};

export function Scope<T>({ children, tags, context }: PropsWithChildren<Props<T>>): JSX.Element {
  const scope = useScope(tags);
  useEffect(() => {
    if (context) {
      scope.register(IScopeContextKey, context);
    }
  }, [context]);
  return <LocatorContext.Provider value={scope}>{children}</LocatorContext.Provider>;
}
