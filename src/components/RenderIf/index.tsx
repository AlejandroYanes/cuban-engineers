import React, { FunctionComponent } from 'react';

interface Props {
  isTrue: boolean;
}

const RenderIf: FunctionComponent<Props> = (props): any => {
  const { isTrue, children } = props;

  if (isTrue) {
    return children;
  }
  return null;
};

export default RenderIf;
