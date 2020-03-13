import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  width: 500px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.primary}
`;
