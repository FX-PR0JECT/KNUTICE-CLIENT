import styled, { css } from 'styled-components';

const SecondSec = styled.div`
  width: 100%;
  height: 100%;

  overflow-y: auto;
`;

const HomeContent = styled.div<{ $device: TDevice }>`
  display: flex;
  flex-direction: column;

  margin: auto;
  padding-top: 7rem;
  overflow: hidden;

  ${({ $device }) => {
    switch ($device) {
      case 'desktop':
        return css`
          width: 68rem;
        `;
      case 'tablet':
        return css`
          width: 40rem;
        `;
      case 'mobile':
        return css`
          width: 20rem;
        `;
    }
  }}
`;

const ContentWrapper = styled.div<{ $device: TDevice }>`
  display: flex;
  align-items: center;

  ${({ $device }) => {
    switch ($device) {
      case 'desktop':
        return css`
          height: 35rem;
          justify-content: space-between;
          gap: 2rem;
        `;
      case 'tablet':
        return css`
          height: 48rem;
          flex-direction: column;
          gap: 2rem;
        `;
      case 'mobile':
        return css`
          height: 30rem;
          flex-direction: column;
          gap: 1.5rem;
        `;
    }
  }}
`;

const ContentDesc = styled.div<{ $device: TDevice }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${({ $device }) => {
    switch ($device) {
      case 'desktop':
        return css`
          width: 42rem;
        `;
      case 'tablet':
        return css`
          width: 37rem;
        `;
      case 'mobile':
        return css`
          width: 20rem;
        `;
    }
  }}
`;

const Title = styled.h1<{ $align?: string; $device: TDevice }>`
  text-align: ${(props) => (props.$align ? props.$align : 'left')};
  color: ${({ theme }) => theme.color};
  line-height: 1.2;

  ${({ $device }) => {
    switch ($device) {
      case 'desktop':
        return css`
          font-size: 3.8rem;
        `;
      case 'tablet':
        return css`
          font-size: 3.5rem;
        `;
      case 'mobile':
        return css`
          font-size: 1.8rem;
        `;
    }
  }}
`;

const Description = styled.span<{ $align: string; $device: TDevice }>`
  color: ${({ theme }) => theme.color};
  text-align: ${(props) => (props.$align ? props.$align : 'left')};

  line-height: 1.45;
  white-space: pre-line;
  word-break: keep-all;

  ${({ $device }) => {
    switch ($device) {
      case 'desktop':
        return css`
          font-size: 1.2rem;
        `;
      case 'tablet':
        return css`
          font-size: 1rem;
        `;
      case 'mobile':
        return css`
          font-size: 0.8rem;
        `;
    }
  }}
`;

const ContentImage = styled.div<{ $device: TDevice }>`
  ${({ $device }) => {
    switch ($device) {
      case 'desktop':
        return css`
          width: 30rem;
          height: 20rem;
        `;
      case 'tablet':
        return css`
          width: 38rem;
          height: 24rem;
        `;
      case 'mobile':
        return css`
          width: 20rem;
          height: 13rem;
        `;
    }
  }}
`;

const Image = styled.div`
  width: 100%;
  height: 100%;

  border: 0.125rem solid ${({ theme }) => theme.borderColor};
  border-radius: 1.3rem;
`;

export {
  SecondSec,
  HomeContent,
  ContentWrapper,
  ContentDesc,
  Title,
  Description,
  ContentImage,
  Image,
};
