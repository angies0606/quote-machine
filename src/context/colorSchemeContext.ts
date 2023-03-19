import { createContext, useContext } from 'react';
import { COLORS, IColorSсheme } from 'models/color.models';

export const ColorSchemeContext = createContext<IColorSсheme>({
  color: COLORS.BLUE,
  getNewColor: () => {}
});

export function useColorSchemeContext(): IColorSсheme {
  return useContext(ColorSchemeContext);
};