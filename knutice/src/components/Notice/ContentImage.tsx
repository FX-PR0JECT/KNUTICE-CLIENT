'use client';

import styled, { css } from 'styled-components';

interface imageURL {
  device: TDevice;
  imageURL?: string;
}

const ContentImage = ({ device, imageURL }: imageURL) => {
  return (
    <ImageWrapper $device={device}>
      {imageURL ? (
        <Img src={imageURL} alt="공지 이미지" />
      ) : (
        <Img src="assets/defaultImage.svg" alt="공지 이미지" />
      )}
    </ImageWrapper>
  );
};

export default ContentImage;

const ImageWrapper = styled.div<{ $device: TDevice }>`
  width: 100%;
  height: 12.5rem;

  ${({ $device }) => {
    switch ($device) {
      case 'mobile':
        return css`
          height: 10.5rem;
        `;
    }
  }}
`;

const Img = styled.img`
  width: 100%;
  height: 100%;

  border-radius: 0.875rem 0.875rem 0 0;
  object-fit: cover;
`;
