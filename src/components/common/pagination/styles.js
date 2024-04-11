import styled from 'styled-components'

export const Container = styled.div`
  margin: 1rem;
  width: 100%;

  ul {
    display: flex;
    justify-content: center;
  }

  a {
    margin: 1rem;
    padding: 0.5rem 0.7rem;
    background-color: ${({ theme }) => theme.COLORS.GRAY};
    border-radius: 0.7rem;
  }

  @media (max-width: 450px) {
    a {
      margin: 0.2rem;
      font-size: 0.9rem;
    }
  }
`
