import styled from 'styled-components'

export const Management = styled.div`
  & > a {
    display: block;
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    margin: 2rem auto 20rem auto;
    width: fit-content;
    border-radius: 5px;
    padding: 1rem;
    opacity: 0.9;
    font-size: 1.5rem;
    font-weight: bold;

    :hover {
      opacity: 1;
    }
  }
`
