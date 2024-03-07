import styled from 'styled-components'

export const Footer = styled.footer`
  background-color: ${({ theme }) => theme.COLORS.GRAY};
  color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 1rem;
  text-align: center;
`

export const FooterContent = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-family: 'Inter', sans-serif;
  gap: 2rem;

  p {
    font-size: 1rem;
  }

  img {
    width: 10rem;
  }

  @media (min-width: 768px) {
    gap: 6rem;
  }
`

export const FooterLinks = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 1rem;
`

export const FooterLink = styled.li`
  display: inline-block;
  margin-right: 2rem;
`
