import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  padding-block: 1.4rem;
  border-radius: 0.5rem;
  border: none;
  width: 100%;
  cursor: pointer;

  transition: filter 0.3s ease 0s;

  color: ${({ theme }) => theme.COLORS.WHITE};
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  font-weight: 700;
`
