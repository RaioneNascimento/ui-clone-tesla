import styled from 'styled-components';

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  background: ${({ theme }) => theme.colors.background};
`;

export const LoadingImage = styled.img`
  width: 140px; 
  height: 140px; 
  margin-bottom: 16px;
`;