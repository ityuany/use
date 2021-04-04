import { useState } from 'react';
import { usePrevious } from '.';
import { renderHook, act } from '@testing-library/react-hooks';

describe('usePrevious', function() {
  it('should define use', function() {
    expect(usePrevious).toBeDefined();
  });
  it('should record previous state', function() {
    const hooks = renderHook(() => {
      const [state, updateState] = useState({ name: 'default' });
      const previous = usePrevious(state);
      return {
        previous,
        updateState: (name: any) => updateState({ name }),
      };
    });
    expect(hooks).toBeDefined();
    expect(hooks.result.current.previous.name).toEqual('default');
    act(() => hooks.result.current.updateState({ name: '张三' }));
    expect(hooks.result.current.previous.name).toEqual('default');
  });
});
