import React from 'react';
import classnames from 'classnames';

interface ContainerProps {
  className?: string;
  fluid?: boolean;
}

const Container: React.SFC<ContainerProps> = ({ children, fluid, className }) => (
  <div className={classnames('site-container', fluid && 'site-container--fluid', className)}>
    {children}
  </div>
);

export default Container;
