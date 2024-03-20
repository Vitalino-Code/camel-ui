import styled from 'styled-components'

export const Label = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 100%;
  gap: 1rem;
  padding: 2.4rem;
  border-radius: 1rem;

  color: black;
  background-color: ${({ theme }) => theme.COLORS.WHITE};

  h2 {
    font-size: 2.8rem;
  }

  p {
    text-align: justify;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (min-width: 750px) {
    display: grid;
    grid-template-columns: 20% 1fr;
    gap: 1rem;
  }
`

export const Subcategories = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  text-align: center;

  @media (min-width: 750px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  padding: 1rem;
  border-radius: 1rem;
  gap: 1rem;
  height: fit-content;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY};
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  color: black;
  transition: 0.3s;
`

export const Subcategory = styled.li`
  button {
    border-radius: 1rem;
    padding: 0.2rem 2rem;
    color: ${props => (props.$selected ? props.theme.COLORS.ORANGE : 'black')};
  }

  & > button:hover {
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    color: ${({ theme }) => theme.COLORS.ORANGE};
    transition: 0.3s;
  }
`
