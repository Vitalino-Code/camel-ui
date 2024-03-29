import styled from 'styled-components'

export const ProdArea = styled.div`
  font-size: 1.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;

  border-radius: 1rem;

  width: 100%;
  padding-inline: 1rem;
  padding-block: 2.4rem;
  background-color: ${({ theme }) => theme.COLORS.WHITE};

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 40% 3fr;
    grid-template-areas:
      'Slides ProdName'
      'Slides InfoArea'
      'Slides SelectionArea';
  }
`

export const ProdName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.6rem;
  width: 100%;

  color: black;

  h1 {
    font-size: 2.2rem;
  }

  hr {
    width: 85%;
    height: 0.2rem;
    background-color: ${({ theme }) => theme.COLORS.GRAY};
  }

  @media (min-width: 1024px) {
    grid-area: ProdName;

    h1 {
      width: 85%;
      margin-left: 0;
    }

    hr {
      height: 0.3rem;
    }
  }
`

export const Slides = styled.div`
  width: 100%;

  @media (min-width: 1024px) {
    grid-area: Slides;
  }
`

export const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;

  text-align: justify;

  color: black;

  a {
    font-weight: 600;
    text-decoration: underline;
    font-size: 1.2rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};
    margin: 0 auto; /* Centralizar horizontalmente */
    max-width: 85%; /* Limitar a largura a 85% */
    text-align: center; /* Centralizar o texto */
  }

  hr {
    width: 85%;
    height: 0.2rem;
    margin-top: 2.2rem;
    background-color: ${({ theme }) => theme.COLORS.GRAY};
  }

  @media (min-width: 1024px) {
    grid-area: InfoArea;

    p {
      width: 85%;
      margin: auto;
    }

    a {
      width: 85%;
      margin: auto;
      text-align: start;
    }
  }
`

export const SelectionArea = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  color: black;

  & > p {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    font-size: 1.6rem;
    font-weight: 600;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;

    div {
      display: flex;
      flex-direction: row;
    }

    label {
      font-size: 1.4rem;
    }

    select {
      padding: 2px;
      border-radius: 3px;
    }

    button {
      background-color: ${({ theme }) => theme.COLORS.ORANGE};
      padding: 1rem;
      border-radius: 1rem;

      color: ${({ theme }) => theme.COLORS.WHITE};
      font-size: 1.2rem;
      font-weight: 700;
    }
  }

  @media (min-width: 1024px) {
    grid-area: SelectionArea;
  }
`
export const MoreInfoArea = styled.div`
  font-size: 1.4rem;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  padding: 24px;

  border-radius: 1rem;

  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.WHITE};

  p {
    color: black;
    font-size: 16px;
  }

  button {
    display: flex;
    align-items: flex-start;
    font-size: 18px;
    font-weight: bold;
    align-items: center;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 40% 3fr;
  }
`
export const ArrowIcon = styled.span`
  display: flex;
  align-items: center;
  width: 0;
  height: 0;
  border-top: 6px solid transparent;
  border-bottom: 6px solid transparent;
  border-left: 6px solid black;
  transition: transform 0.1s ease-in-out;
  transform: ${({ showMoreInfo }) =>
    showMoreInfo ? 'rotate(90deg)' : 'rotate(0deg)'};
  margin-right: 5px;
  box-sizing: border-box;
  justify-content: center;
`
