import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
`;

const PreViewer = styled.div`
  display: flex;
  width: 300px;
  height: 300px;
  margin: 0 auto;
  font-size: 1rem;
  align-items: center;
  justify-content: center;
`;

const UploadLabel = styled.label`
  display: block;
  width: 300px;
  height: 56px;
  margin: 1rem auto;
  background-color: #cadbe9;
  line-height: 56px;
`;

const UploadFile = styled.input`
  display: none;
`;

interface UploadInputProps {
  file?: string;
}

const UploadInput = ({ file }: UploadInputProps): JSX.Element => {
  return (
    <Wrapper>
      <UploadLabel htmlFor="upload">
        <UploadFile id="upload" type="file" />
        사진 업로드
      </UploadLabel>
      <PreViewer>
        {file ? (
          <img src={file} alt="업로드한 이미지" />
        ) : (
          <span>이미지를 업로드 해주세요.</span>
        )}
      </PreViewer>
    </Wrapper>
  );
};

UploadInput.defaultProps = {
  file: '',
};

export default UploadInput;
