import styled from 'styled-components';

const SecondSec = styled.div`
  width: 100%;
  height: 100%;

  overflow-y: auto;
`;

const HomeContent = styled.div`
  display: flex;
  flex-direction: column;

  width: 75rem;

  margin: auto;
  padding-top: 7rem;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 35rem;
`;

const ContentDesc = styled.div`
  display: flex;
  flex-direction: column;

  width: 40rem;
  gap: 1rem;
`;

const Title = styled.h1<{ $align?: string }>`
  text-align: ${(props) => (props.$align ? props.$align : 'left')};
  color: #fff;
  font-size: 3.8rem;
  line-height: 1.2;
`;

const Description = styled.span`
  color: #fff;
  font-size: 1.25rem;
  line-height: 1.45;
  white-space: pre-line;
  word-break: keep-all;
`;

const ContentImage = styled.div`
  width: 30rem;
  height: 20rem;
`;

const Image = styled.div`
  width: 100%;
  height: 100%;

  border: 2px solid #ffffffc8;
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
