// inspired by https://egghead.io/lessons/react-extract-generic-react-hook-code-into-custom-react-hooks
import { useReducer } from 'react';
import { useIsMounted } from '../hooks/useIsMounted';

export const useSetState = initialState => {
  return useReducer(
    (state, newState) => ({ ...state, ...newState }),
    initialState,
  );
};

// prevent memory leak when running setState on unmounted component
export const useSafeSetState = initialState => {
  const [state, setState] = useSetState(initialState);
  const isMounted = useIsMounted();

  const safeSetState = (...args) => isMounted.current && setState(...args);

  return [state, safeSetState];
};
