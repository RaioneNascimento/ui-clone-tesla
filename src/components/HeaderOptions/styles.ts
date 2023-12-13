import styled from 'styled-components';

export const OptionsList = styled.ul`
  list-style-type: none;
    padding: 0;

  .option-item { 
    font-family: 'Marcellus SC', sans-serif;


    color: ${({ theme }) => theme.colors.primary};
    margin: 5px;
    padding: 10px;
    border-radius: 5px;
    display: inline-block;

    transition: all 0.4s;

    &:hover {
      cursor: pointer;

      color: ${({ theme}) => theme.colors.secondary};
      text-decoration: underline;
    }
  }
`;