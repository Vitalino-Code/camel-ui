import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 1rem;

  svg {
    max-width: 3rem;
  }

  img {
    ${props => (props.$maxWidth ? `max-width: 200px;` : ``)};
  }

  @media (min-width: 1024px) {
    svg {
      width: 50% !important;
      min-width: 2rem;
    }
  }
`
