import React from 'react';
import classnames from 'classnames';

interface SectionProps {
  className?: string;

}

const Hero: React.SFC<SectionProps> = ({ children, className, }) => (
  <div className={classnames('hero', className)}>

    {children}
  </div>
);

export default Hero;
