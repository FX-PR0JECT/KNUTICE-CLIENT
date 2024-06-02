import styled, { css } from 'styled-components';

const TitleContainer = styled.div<{ $device: TDevice }>`
  display: flex;
  flex-direction: column;

  padding: 2.4rem 0 3rem 0.8rem;
  gap: 0.5rem;

  ${({ $device }) => {
    if ($device === 'mobile') {
      return css`
        padding: 1rem 0 1.75rem 0.8rem;
      `;
    }
  }}
`;

const TitleText = styled.h1<{ $device: TDevice }>`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.color};

  gap: 0.5rem;

  ${({ $device }) => {
    switch ($device) {
      case 'desktop':
        return css`
          font-size: 2.8rem;
        `;
      case 'tablet':
        return css`
          font-size: 2.5rem;
        `;
      case 'mobile':
        return css`
          font-size: 2.4rem;
        `;
    }
  }}
`;

const Description = styled.span<{ $device: TDevice }>`
  font-weight: 500;
  text-indent: 0.2rem;
  color: ${({ theme }) => theme.color};

  ${({ $device }) => {
    switch ($device) {
      case 'desktop':
        return css`
          font-size: 2rem;
        `;
      case 'tablet':
        return css`
          font-size: 1.8rem;
        `;
      case 'mobile':
        return css`
          font-size: 1.3rem;
        `;
    }
  }}
`;

export { TitleContainer, TitleText, Description };
