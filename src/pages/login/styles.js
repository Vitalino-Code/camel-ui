import styled from 'styled-components'

export const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;

  text-align: center;

  & > a > img {
    width: 10rem;
  }

  & > h1 {
    font-size: 3rem;
  }

  @media (min-width: 425px) {
    width: 38.5rem;
  }

  @media (min-width: 1024px) {
    & > a > img {
      width: 20rem;
    }
  }
`

export const Fildset = styled.div`
  display: flex;
  flex-direction: column;

  & > form > div {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 3.2rem;
  }

  & > form > div > a {
    color: ${({ theme }) => theme.COLORS.ORANGE};
    font-size: 1.2rem;
    font-weight: 600;
    opacity: 0.8;

    transition: opacity 0.3s ease 0s;

    :hover {
      opacity: 1;
    }
  }

  & > p {
    margin-top: 1.5rem;

    font-size: 1.4rem;
    text-align: center;
    font-weight: 600;
  }

  & > p > a {
    color: ${({ theme }) => theme.COLORS.ORANGE};
    opacity: 0.8;

    :hover {
      opacity: 1;
    }
  }

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;

    margin-top: 6.4rem;
    width: 100%;
  }

  & > div > a {
    background-color: #3f445a;
    width: 7rem;
    height: 5rem;
    border-radius: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: background 0.3s ease 0s;
  }

  & > div > a > svg {
    fill: ${({ theme }) => theme.COLORS.ORANGE};
    width: 20px;
    height: 20px;
  }
  @media (min-width: 425px) {
    width: 38.5rem;
  }
`
