import React, { useState } from 'react';
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

  img {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
  }
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

const UploadInput = (): JSX.Element => {
  const fileTypes = ['gif', 'png', 'jpg', 'jpeg', 'tif', 'tiff'];
  const [previewUrl, setPreview] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (!files || files.length <= 0) {
      return;
    }

    if (!fileTypes.find(type => `image/${type}` === files[0].type)) {
      return;
    }
    // 파일 데이터를 읽으려면 FileReader API를 사용해야한다.
    const reader = new FileReader();

    // FileReader가 즉시 파일을 읽는게 아니기 때문에 onload 이벤트 핸들러를 붙여서 콜백으로 파일을 다 읽었다는 것을 알려줘야 한다.
    reader.onload = (e: any) => {
      const { result } = e.target;

      if (typeof result !== 'string') {
        return;
      }

      setPreview(result);
    };

    // Blob이나 File에서 컨텐츠를 읽어오는 역할을 한다. read가 완료되면 load 이벤트가 트리거 되며 이와 함께 base64 인코딩 된 스트링 데이터가 result 속성에 담아지게 된다.
    reader.readAsDataURL(files[0]);

    setFile(files[0]);
  };

  return (
    <>
      <Wrapper>
        <UploadLabel htmlFor="upload">
          <UploadFile
            id="upload"
            type="file"
            accept="image/*"
            onChange={handleChangeFile}
          />
          사진 업로드
        </UploadLabel>
        <PreViewer>
          {file ? (
            <img src={previewUrl} alt="업로드한 이미지" />
          ) : (
            <span>이미지를 업로드 해주세요.</span>
          )}
        </PreViewer>
      </Wrapper>
    </>
  );
};

UploadInput.defaultProps = {
  file: '',
};

export default UploadInput;
