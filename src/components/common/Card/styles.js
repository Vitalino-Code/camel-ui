import styled from 'styled-components'

export const ProductContainer = styled.div`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  color: ${({ theme }) => theme.COLORS.BLACK};
  margin: auto;
  border-radius: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  width: 160px;
  height: auto;
`

export const ImageContainer = styled.div`
  background-color: ${({ theme }) => theme.COLORS.GRAY};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 1rem;
`

export const ProductName = styled.div`
  color: ${({ theme }) => theme.COLORS.BLACK};
  h2 {
    font-size: 1.4rem;
    font-weight: normal;
  }
  margin-top: 12px;
`

export const ProductPrice = styled.div`
  color: ${({ theme }) => theme.COLORS.ORANGE};
  font-size: 1.6rem;
  margin-top: 8px;
  font-weight: bold;
`
export const ProductImage = styled.img`
  width: 8rem;
  height: 8rem;
  object-fit: cover;
`
