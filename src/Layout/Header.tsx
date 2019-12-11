import React from 'react';
import styled from 'styled-components';

interface HeaderProps {
  children?: string;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const StyledHeader = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  text-align: center;
  background: linear-gradient(
    90deg,
    #d4dfe6,
    #8ec0e4 35%,
    #cadbe9 69%,
    #6aafe6
  );
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledHeaderText = styled.div`
  font-size: 20px;
`;

const StyledMenuButton = styled.button`
  position: fixed;
  right: 0;
`;

const Header = ({ open, setOpen }: HeaderProps) => {
  return (
    <StyledHeader>
      <StyledHeaderText>헤더</StyledHeaderText>
      <StyledMenuButton onClick={() => setOpen(!open)}>
        <img src="../image/bar-menu.svg" alt="메뉴버튼" />
      </StyledMenuButton>
    </StyledHeader>
  );
};

export default Header;
