import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Modal = styled.div`
  display: flex;
  position: relative;
  width: 85%;
  max-height: 75%;
  min-height: 164px;
  padding: 1.5rem;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.color.white};
  flex-direction: column;
  justify-content: center;
  z-index: 3102;

  button {
    margin: auto auto 0;
    width: 300px;
    height: 50px;
    line-height: 50px;
    font-size: 1rem;
  }
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.125rem;
  font-weight: bold;
  text-align: center;
`;

const Body = styled.div`
  margin: auto 0 1rem;
  font-size: 1rem;
  line-height: 1.3;
  text-align: center;
`;

/* 백그라운드 */
const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  user-select: none;
  z-index: 3101;
`;

interface AlertProps {
  children: React.ReactNode;
  onClick: () => void;
  onClose: () => void;
}

const Alert = ({ children, onClick, onClose }: AlertProps) => {
  return (
    <Wrapper>
      <Modal>
        <Title>제목 텍스트</Title>
        <Body>{children}</Body>
        <button type="button" onClick={onClick}>
          확인
        </button>
      </Modal>
      <Background onClick={onClose} />
    </Wrapper>
  );
};

export default Alert;
