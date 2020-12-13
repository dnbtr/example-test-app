import React, { ReactNode, ReactElement } from 'react';
import Menu from '../Menu';

// Sobre desestruturação do children com TS
// ver https://stackoverflow.com/questions/59106742/typescript-error-property-children-does-not-exist-on-type-reactnode
function PageDefault({ children }: { children: ReactNode}): ReactElement {
  return (
    <React.Fragment>
      <Menu />
      {children}
    </React.Fragment>
  );
}

export default PageDefault;
