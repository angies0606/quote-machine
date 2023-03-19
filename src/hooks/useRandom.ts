import {useCallback, useState} from 'react';
import {useEffectSkipFirst} from './useEffectSkipFirst';

type TCallback = () => void;

// Вычисляем рандомный индекс итема в массиве
function findRandomValue<T = any> (valuesArr: T[], initialArray: T[]): [T, T[]] {
  if (valuesArr.length === 0) {
    return [null, []];
  }
  const maxNum = valuesArr.length;
  const randomIndex = Math.floor(Math.random() * maxNum);
  const randomValue = valuesArr[randomIndex];
  let newValuesArr = [...valuesArr];
  newValuesArr.splice(randomIndex, 1);
  if(newValuesArr.length === 0) {
    if (initialArray.length === 1) {
      newValuesArr = initialArray;
    } else {
      newValuesArr = initialArray.filter(item => item !== randomValue);
    }
  }
  return [randomValue, newValuesArr];
}

/* Хук, хранящий рандомное значение и массив оставшихся значений.
Возвращает рандомное значение и коллбэк для последующего вычисления нового рандомного итема*/
export function useRandom<T = any>(array: T[]): [T, TCallback] {
  const [[randomValue, valuesArr], setState] = useState<[T, T[]]>(() => {
    return findRandomValue(array, array)
  });

  const findNewValue: TCallback = useCallback((): void => {
    setState(findRandomValue(valuesArr, array));
  }, [valuesArr, array]);

  useEffectSkipFirst(() => {
    findNewValue();
  }, [array]);

  return [randomValue, findNewValue];
}
