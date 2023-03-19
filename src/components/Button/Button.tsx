import { FC, PropsWithChildren, MouseEventHandler, CSSProperties } from 'react';
import classNames from 'classnames';
import classes from './Button.module.scss';

interface IButtonProps extends PropsWithChildren {
  id?: string;
  className?: string;
  style?: Pick<CSSProperties, 'backgroundColor'>;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<IButtonProps> = ({
  id,
  className,
  style,
  children,
  onClick
}) => {
  
  return (
    <button 
      id={id} 
      className={classNames(className, classes.Button)}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  )
}

export default Button;