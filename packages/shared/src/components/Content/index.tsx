import React from 'react';

interface ContentProps extends React.HTMLAttributes<HTMLDivElement> {
  boxed?: boolean;
}

export const Index: React.FC<ContentProps> = ({className, boxed, ...props}) => {
  return (
    <div
      className={`overflow-auto relative flex-grow ${className ?? ''} ${
        boxed ? 'lg:container lg:mx-auto' : ''
      }`}
      {...props}
    />
  );
};

export default Index;
