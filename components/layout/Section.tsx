import React from 'react';
import classnames from 'classnames';

interface SectionProps {
  className?: string;
  title?: string;

}

const Section: React.SFC<SectionProps> = ({ children, className, title }) => (
  <div className={classnames('site-container', className)}>

    {children}
  </div>
);

export default Section;
