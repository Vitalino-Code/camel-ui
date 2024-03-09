import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  color: ${({ theme }) => theme.COLORS.ORANGE};
  margin: 7rem auto;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  width: 100%;
  max-width: 1000px;
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.COLORS.BLACK};
  padding: 10px;
`
export const ProductContainer = styled.div`
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  flex-wrap: wrap;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  max-width: 100%;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  }
`
