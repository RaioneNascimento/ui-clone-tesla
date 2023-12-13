import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 16.5vh;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  position: relative;

  h2, p {
    color: ${({ theme }) => theme.colors.primary};
  }

  .title {
    font-size: 2.5rem;
    font-family: 'Marcellus SC', sans-serif;
    font-weight: bold;
  }

  p {
    font-size: 1rem;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: 500;
    font-style: italic;
  }
`;

export const TitleContent = styled.h2`
  position: absolute;
  bottom: 60px;
  left: 50%;
  transform: translateX(-50%);
  
  .shadow-text {
    font-size: 6rem; 
    font-family: 'Marcellus SC', sans-serif;
    font-weight: bold;

    color: ${({ theme }) => theme.shadow.text};
    line-height: 1; 
    white-space: nowrap;

    @media (max-width: 768px) {
      font-size: 4rem; 
    }
  }

  @media (max-width: 768px) {
    bottom: 80px;

    .shadow-text {
      font-size: 4rem; 
    }
  }
`;
