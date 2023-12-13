import styled from 'styled-components'

export const Management = styled.div`
  & > a {
    display: block;
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    margin-top: 2rem;
    margin: 2rem auto 0 auto;
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
