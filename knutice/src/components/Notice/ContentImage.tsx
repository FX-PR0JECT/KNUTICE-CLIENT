'use client';

import styled from 'styled-components';

interface imageURL {
  imageURL?: string;
}

const ContentImage = ({ imageURL }: imageURL) => {
  return (
    <ImageWrapper>
      {imageURL ? (
        <Img src={imageURL} alt="공지 이미지" />
      ) : (
        <Img src="assets/defaultImage.svg" alt="공지 이미지" />
      )}
    </ImageWrapper>
  );
};

export default ContentImage;

const ImageWrapper = styled.div`
  width: 100%;
  height: 12.5rem;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;

  border-radius: 0.875rem 0.875rem 0 0;
  object-fit: cover;
`;
