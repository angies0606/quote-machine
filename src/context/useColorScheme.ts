import { useRandom } from 'hooks/useRandom';
import { colors, IColorSсheme, COLORS } from 'models/color.models';

export function useColorScheme(): IColorSсheme {
  const [color, getNewColor] = useRandom<COLORS>(colors);
  return {color, getNewColor};
}