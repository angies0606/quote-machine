import { FC, PropsWithChildren } from 'react';
import { ColorSchemeContext } from 'context/colorSchemeContext';
import { useColorScheme } from 'context/useColorScheme'; 

interface IAppProvidersProps extends PropsWithChildren {}

const AppProviders: FC<IAppProvidersProps> = ({children}) => {
  let colorState = useColorScheme();
  return (
    <ColorSchemeContext.Provider value={colorState}>
      {children}
    </ColorSchemeContext.Provider>
  );
}

export default AppProviders;