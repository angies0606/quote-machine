import {FC} from 'react';
import Button from 'components/Button/Button';
import classes from './QuoteBox.module.scss';
import TwitterIcon from '@mui/icons-material/Twitter';
import AutoModeIcon from '@mui/icons-material/AutoMode';
import Link from 'components/Link/Link';
import { IQuote } from 'models/quote.models';
import { TCallback } from 'models/common.models';
import { useColorSchemeContext } from 'context/colorSchemeContext';
import CircularProgress from '@mui/material/CircularProgress';

interface IQuoteBoxProps {
  quote: IQuote,
  onChangeQuote: TCallback;
}

const QuoteBox: FC<IQuoteBoxProps> = ({
  quote,
  onChangeQuote
}) => {
  let colorState = useColorSchemeContext();
  return (
    <>
      <div id='quote-box' className={classes.QuoteBox}>
        {Boolean(quote)
          ?
            <>
              <div id='text' className={classes.QuoteBox__Text} style={{color: colorState.color}}>
                {quote?.text}
              </div>
              <div id='author' className={classes.QuoteBox__Author} style={{color: colorState.color}}>
                - 
                {quote?.author}
              </div>
            </>
          : <div className={classes.QuoteBox__ProgressBox}>
              <CircularProgress color="inherit" style={{alignSelf: 'center'}}/>
            </div>
        }
          <div className={classes.QuoteBox__Buttons}>
            <div className={classes.QuoteBox__Links}>
              <Link 
                id='tweet-quote'
                href='https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22If%20you%20can%20dream%20it%2C%20you%20can%20achieve%20it.%22%20Zig%20Ziglar'
                className={classes.QuoteBox__Link}
                style={{backgroundColor: colorState.color}}
              >
                <TwitterIcon className={classes.QuoteBox__Icon}/>
              </Link>
              <Link 
                id='tumblr-quote'
                href='https://vk.com/'
                className={classes.QuoteBox__Link}
                style={{backgroundColor: colorState.color}}
              >
                <AutoModeIcon className={classes.QuoteBox__Icon}/>
              </Link>
            </div>
            <Button 
              id='new-quote'
              className={classes.QuoteBox__NewQuoButton}
              style={{backgroundColor: colorState.color}}
              onClick={onChangeQuote}
            >
              New quote
            </Button>
          </div>
      </div>
    </>
  )
}

export default QuoteBox;