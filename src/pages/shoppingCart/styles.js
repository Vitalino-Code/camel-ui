import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column !important;

  margin: 7rem 1rem;
  padding: 3.2rem 1rem;
  border-radius: 0.8rem;

  color: black;
  background-color: white;

  @media (min-width: 768px) {
    max-width: 77rem;
    margin: 7rem auto;
  }

  h1 {
    font-size: 2.8rem;
    text-align: center;
  }
`

export const ProductList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;

  li {
    width: 100%;
    border-bottom: 0.3rem solid ${({ theme }) => theme.COLORS.BODY_BG};

    @media (min-width: 768px) {
      max-width: 70rem;
      margin: auto;
    }
  }
`

export const DeleteAllButton = styled.button`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 0.6rem;

  margin-top: 2rem;
  padding: 0.5rem 2.5rem;
  border-radius: 0.7rem;
  font-size: 1.2rem;

  background-color: ${({ theme }) => theme.COLORS.GRAY};
  color: ${({ theme }) => theme.COLORS.WHITE};
`

export const Total = styled.p`
  width: 100%;
  text-align: center;
  margin: 2rem auto;
  font-size: 2rem;

  span {
    font-weight: 600;
  }
`

export const Budget = styled.button`
  width: 100%;
  margin: 2rem 0;
  line-height: 3.2rem;
  border-radius: 0.7rem;
  font-weight: 700;

  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
`

export const EmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  margin: 2rem auto;

  h3 {
    color: ${({ theme }) => theme.COLORS.ORANGE};
    margin-bottom: 1rem;
    text-align: center;
  }

  a {
    color: ${({ theme }) => theme.COLORS.ORANGE};

    &:hover {
      text-decoration: underline;
    }
  }
`
