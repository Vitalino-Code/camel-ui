import styled from 'styled-components'

export const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3.2rem;

  text-align: center;

  a > img {
    width: 10rem;
  }

  h1 {
    font-size: 3rem;
  }

  h3 {
    font-size: 1.6rem;
    color: #a8a8b3;
    font-weight: bold;
  }

  a {
    color: ${({ theme }) => theme.COLORS.ORANGE};
    text-decoration: none;
    font-weight: 600;
    font-size: 1.4rem;
    opacity: 80%;

    display: flex;
    align-items: center;
    gap: 1.6rem;

    transition: opacity 0.3s ease 0s;
  }

  @media (min-width: 425px) {
    width: 38.5rem;
  }

  @media (min-width: 1024px) {
    a > img {
      width: 20rem;
    }
  }
`

export const Fieldset = styled.div`
  & > h2 {
    font-size: 2rem;
  }

  & > form > div {
    border: none;
    margin: 3rem 0 6rem 0;

    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  @media (min-width: 425px) {
    width: 38.5rem;
  }
`
