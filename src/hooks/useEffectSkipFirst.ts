import {useEffect, useRef, EffectCallback, DependencyList} from 'react';

// Пропускаем первый useEffect
export function useEffectSkipFirst(effectFn: EffectCallback, depsArray?: DependencyList): void {
  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    effectFn();
  }, depsArray);
}