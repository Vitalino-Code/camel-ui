import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 13px 40% 1fr;
  align-items: center;

  gap: 1rem;
  padding: 2rem 0.5rem;

  @media (min-width: 500px) {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 2rem;
    gap: 2rem;
  }

  @media (min-width: 768px) {
    max-width: 60rem;
    margin: auto;
  }
`

export const Img = styled.img`
  margin: auto;
  background-color: ${({ theme }) => theme.COLORS.GRAY};
  padding: 1rem;
  border-radius: 0.5rem;
  max-width: 10rem;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 1.8rem;
  color: black;

  @media (min-width: 500px) {
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    text-align: justify;
    padding: 1rem 0.5rem;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;

    & > p {
      font-size: 1.4rem;
    }
  }
`

export const Name = styled.p`
  font-size: 1.8rem !important;
  font-weight: 600;
`

export const Available = styled.p`
  font-size: 1.2rem !important;
  ${props => (props.$available ? `color: #007600;` : `color: #AB2E46;`)}
`

export const Price = styled.p`
  font-weight: 600;
  text-align: center;
  font-size: 1.6rem !important;
  max-width: 120px;
  color: ${({ theme }) => theme.COLORS.ORANGE};

  @media (min-width: 500px) {
    font-size: 2rem !important;
  }
`

export const Options = styled.div`
  display: flex;
  flex-direction: row !important;
  align-items: center;
  gap: 1rem !important;

  @media (min-width: 500px) {
    flex-direction: column !important;
  }

  & > select {
    padding: 0.4rem 0.5rem 0.4rem 0.5rem;
    border-radius: 0.5rem;
    border: 0.1rem solid #9c98a6;
  }

  span {
    color: ${({ theme }) => theme.COLORS.BODY_BG};
    @media (min-width: 500px) {
      display: none;
    }
  }

  & > button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${({ theme }) => theme.COLORS.ORANGE};
    font-size: 1.2rem;

    &:hover {
      text-decoration: underline;
    }
  }
`
