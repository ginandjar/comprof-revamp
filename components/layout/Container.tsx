import React from 'react';
import classnames from 'classnames';

interface ContainerProps {
  className?: string;
  title?: string;

}

const Container: React.SFC<ContainerProps> = ({ children, className, title }) => (
  <div className={classnames('site-container', className)}>
    <div>
      <h1>{title}</h1>
    </div>
    {children}
  </div>
);

export default Container;
