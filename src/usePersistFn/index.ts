import { useRef } from 'react';

export type AnyFunction = (...args: any[]) => any;

export function usePersistFn<T extends AnyFunction>(fn: T): T {
  const refFn = useRef<T>(fn);
  refFn.current = fn;

  const refPersist = useRef<T | null>(null);

  if (!refPersist.current) {
    refPersist.current = ((...args) => refFn.current?.(...args)) as T;
  }

  return refPersist.current;
}
