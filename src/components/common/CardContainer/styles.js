import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 16px;
  width: 100%;

  border-radius: 8px;
  align-items: center;
  text-align: center;

  background-color: ${({ theme }) => theme.COLORS.WHITE};
  color: ${({ theme }) => theme.COLORS.ORANGE};
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.COLORS.BLACK};
  padding: 10px;
  font-size: 2.4rem;
`
export const ProductContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3rem;
`
