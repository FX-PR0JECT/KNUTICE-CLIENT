'use client';

import styled from 'styled-components';

const DefaultImage = () => {
  return <Image>KNUTICE</Image>;
};

export default DefaultImage;

const Image = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 200px;

  font-size: 2rem;
  font-weight: 600;

  border-radius: 14px 14px 0 0;

  color: #fff;
  background-color: #aaa;
`;
