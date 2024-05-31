import styled, { css } from 'styled-components';

type SkeletonVariant = 'date';
type SkeletonSize = 'sm' | 'md' | 'lg';

export const SkeletonFont = styled.div<{ $size: SkeletonSize; $variant?: SkeletonVariant }>`
  margin-top: 0.2rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.tabBgColor};

  ${({ $size }) => {
    switch ($size) {
      case 'lg':
        return css`
          width: 20.625rem;
          height: 1.9rem;
        `;
      case 'md':
        return css`
          width: 13rem;
          height: 1.5rem;
        `;
      case 'sm':
        return css`
          width: 6.25rem;
          height: 1rem;
        `;
    }
  }}

  ${({ $variant }) => {
    switch ($variant) {
      case 'date':
        return css`
          margin-top: 2.1rem;
        `;
    }
  }}
`;
