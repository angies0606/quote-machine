import {FC} from 'react';
import classes from './App.module.scss';
import QuoteBoxWrapper from 'components/QuoteBoxWrapper/QuoteBoxWrapper';
import { useColorSchemeContext } from 'context/colorSchemeContext';

const App: FC = () => {
  let colorState = useColorSchemeContext();
  return (
    <div className={classes.App} style={{backgroundColor: colorState.color}}>
      <QuoteBoxWrapper />
    </div>
  );
}

export default App;
