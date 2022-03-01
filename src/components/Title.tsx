import React from 'react';

type ChildrenProps = {
  children: string;
};

const Title = ({ children }: ChildrenProps ) => <h1>{children}</h1>;

export default Title;