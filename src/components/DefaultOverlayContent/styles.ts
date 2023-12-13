import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  @media (max-width: 768px) {
    padding: 32px;
  }
`
export const Heading = styled.div`
  text-align: center;

  > h1 {
    font-weight: 500;
    font-size: 4rem;
    line-height: 48px;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 16px;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }
  }

  > h2 {
    font-weight: normal;
    font-size: 1rem;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.primary};
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 130px;
  color: white;

  @media (min-width: 600px) {
    flex-direction: row;
    margin-top: 90px;
  }
`