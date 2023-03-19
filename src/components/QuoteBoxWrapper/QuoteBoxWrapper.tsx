import { FC } from 'react';
import classes from './QuoteBoxWrapper.module.scss';
import QuoteBox from 'components/QuoteBox/QuoteBox';
import quotesData from 'quotes-data/quotes-data.json';
import { useRandom } from 'hooks/useRandom';
import { useColorSchemeContext } from 'context/colorSchemeContext';
import { IQuote } from 'models/quote.models';

const QuoteBoxWrapper: FC = () => {
  const [randomQuote, getNewQuote] = useRandom<IQuote>(quotesData);
  const colorState = useColorSchemeContext();

  const onChangeQuote = () => {
    getNewQuote();
    colorState.getNewColor();
  };

  return (
    <>
      <div className={classes.QuoteBoxWrapper}>
        <QuoteBox 
          quote={randomQuote}
          onChangeQuote={onChangeQuote}
        />
        <div className={classes.QuoteBoxWrapper__Author}>
          <pre>
            by <span className={classes.QuoteBoxWrapper__Span}>Jane Chaus</span>
          </pre>
        </div>
      </div>
    </>
  );
}

export default QuoteBoxWrapper;