import React from 'react';
import styled from '@/styledComponents';

type SideBarProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

type StyleProps = {
  open: boolean;
};

const StyledSideBar = styled.nav<StyleProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #e8e8e9;
  height: 100vh;
  text-align: left;
  padding: 0 2rem;
  position: absolute;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    text-decoration: none;
    transition: color 0.3s linear;
  }
`;

const StyledMenuButton = styled.button`
  position: absolute;
  top: 0;
  left: 0;
`;

function SideBar({ open, setOpen }: SideBarProps) {
  return (
    <StyledSideBar open={open}>
      <StyledMenuButton onClick={() => setOpen(!open)}>
        <img src="../image/bar-menu.svg" alt="메뉴버튼" />
      </StyledMenuButton>
      <a href="/">
        <span role="img" aria-label="about us">
          &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
        </span>
        내사진
      </a>
      <a href="/">
        <span role="img" aria-label="price">
          &#x1f4b8;
        </span>
        니사진
      </a>
      <a href="/">
        <span role="img" aria-label="contact">
          &#x1f4e9;
        </span>
        우리사진
      </a>
    </StyledSideBar>
  );
}

export default SideBar;
