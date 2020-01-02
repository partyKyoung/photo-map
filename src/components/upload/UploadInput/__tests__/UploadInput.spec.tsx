import React from 'react';
import { fireEvent, render, wait } from '@testing-library/react';

import UploadInput from '../UploadInput';

describe('<UploadInput />', () => {
  it('사진 업로드 버튼, 사진 미리보기 view가 정상적으로 출력된다', () => {
    const { getByText } = render(<UploadInput />);

    getByText('사진 업로드'); // label이 있는지 확인
    getByText('이미지를 업로드 해주세요.'); //사진 미리보기 view가 있는지 확인
  });

  it('파일 업로드시 사진 미리보기가 정상적으로 작동된다.', async () => {
    const { getByAltText, getByLabelText } = render(<UploadInput />);
    const input = getByLabelText('사진 업로드');
    const file = new File(['dummy content'], 'example.png', {
      type: 'image/png',
    });

    fireEvent.change(input, {
      target: {
        files: [file],
      },
    });

    await wait(() => getByAltText('업로드한 이미지'));
  });

  it('파일 업로드시 사진 위치 정보를 제대로 가지고 올 수 있다.', async () => {
    // TODO
    // 위치 정보가 있을 때
    // 위치 정보가 없을 때
  });
});
