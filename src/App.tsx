import React, { useState } from 'react';

import styled from '@/styledComponents';
import Header from './Layout/Header';
import SideBar from './Layout/SideBar/SideBar';

const Wrapper = styled.div``;
const Main = styled.div`
  padding-top: 50px;
`;

const App: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <Header open={open} setOpen={setOpen}>
        헤더
      </Header>
      <SideBar open={open} setOpen={setOpen} />
      <Main>main</Main>
    </Wrapper>
  );
};

export default App;
