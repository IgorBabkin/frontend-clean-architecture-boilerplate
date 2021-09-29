import { createQueryHook, createCommandHook, createActionHook, createSagaHook } from 'react-clean-use-case';
import { useDependency } from 'react-ts-ioc-container';

export const useQuery = createQueryHook(useDependency);
export const useCommand = createCommandHook(useDependency);
export const useAction = createActionHook(useDependency);
export const useSaga = createSagaHook(useDependency);
