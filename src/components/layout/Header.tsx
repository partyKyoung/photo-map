import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface HeaderProps {
  children?: string;
  open: boolean;
  setOpen: (open: boolean) => void;
}

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  background: linear-gradient(
    90deg,
    #d4dfe6,
    #8ec0e4 35%,
    #cadbe9 69%,
    #6aafe6
  );
`;

const StyledHeaderText = styled(Link)`
  font-size: 1.25rem;
`;

const StyledMenuButton = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 1rem;
`;

const Header = ({ open, setOpen }: HeaderProps) => {
  return (
    <StyledHeader>
      <StyledHeaderText to="/">Photo Map</StyledHeaderText>
      <StyledMenuButton onClick={() => setOpen(!open)}>
        <img src="../image/bar-menu.svg" alt="메뉴버튼" />
      </StyledMenuButton>
    </StyledHeader>
  );
};

export default Header;
