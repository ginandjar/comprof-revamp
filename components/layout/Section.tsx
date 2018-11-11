import React from 'react';
import classnames from 'classnames';

interface SectionProps {
  className?: string;
  title?: string;

}

const Section: React.SFC<SectionProps> = ({ children, className, title }) => (
  <section className={classnames('section', className)}>

    {children}
  </section>
);

export default Section;
