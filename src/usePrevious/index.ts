import { useRef } from 'react';

export function usePrevious<T>(state: T): T {
  const currState = useRef<T>(state);
  const prevState = useRef<T>(state);

  prevState.current = currState.current;
  currState.current = state;

  return prevState.current;
}
