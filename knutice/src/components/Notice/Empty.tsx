import styled, { css } from 'styled-components';
import { EMPTY_TEXT } from '@/constants/content';

const Empty = ({ device }: { device: TDevice }) => {
  return (
    <EmptyContainer>
      <Image src="/assets/emptyImage.svg" />
      <EmptyText $device={device}>{EMPTY_TEXT.text}</EmptyText>
    </EmptyContainer>
  );
};

export default Empty;

const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 28.125rem;
`;

const Image = styled.img`
  width: 31.25rem;
`;

const EmptyText = styled.span<{ $device: TDevice }>`
  font-size: 1.25rem;
  font-weight: 400;
  letter-spacing: -0.03rem;
  color: ${({ theme }) => theme.color};

  ${({ $device }) => {
    if ($device === 'mobile') {
      return css`
        font-size: 1rem;
      `;
    }
  }}
`;
