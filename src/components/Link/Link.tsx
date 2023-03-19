import React, {FC} from 'react';
import classNames from 'classnames';
import classes from './Link.module.scss';

interface ILinkProps extends React.PropsWithChildren {
  id?: string,
  href: string,
  className?: string,
  style?: React.CSSProperties
}

const Link: FC<ILinkProps> = ({
  id,
  className,
  style,
  href,
  children
}) => {
  return (
    <a 
      href={href}
      className = {classNames(className, classes.Link)}
      id={id}
      style={style}
    >
      {children}
    </a>
  )
}

export default Link;