import React, { useState } from 'react';
import styled from 'styled-components';

import Header from '@/components/layout/Header';
import SideBar from '@/components/layout/SideBar';

const Main = styled.div`
  padding-top: 3.125rem;
`;

const Wrapper = styled.div`
  padding: 1rem 0;
  text-align: center;
`;

interface AppProps {
  children: React.ReactNode;
}

const PageTemplate = ({ children }: AppProps): JSX.Element => {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <Header open={open} setOpen={setOpen}>
        Photo Map
      </Header>
      <SideBar open={open} setOpen={setOpen} />
      <Main>{children}</Main>
    </Wrapper>
  );
};
export default PageTemplate;
