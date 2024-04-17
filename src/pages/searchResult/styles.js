import styled from 'styled-components'

export const NotFound = styled.div`
  text-align: center;
  padding: 10rem 0;
  border-radius: 1.5rem;
  box-shadow: 10px 15px 20px -1px rgba(0, 0, 0, 0.5);

  background-color: ${({ theme }) => theme.COLORS.WHITE};
  color: ${({ theme }) => theme.COLORS.GRAY};

  & > p {
    margin-top: 3rem;
    color: ${({ theme }) => theme.COLORS.GRAY};
  }

  & > button {
    margin-top: 3rem;
    border: none;
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    padding: 1rem;
    border-radius: 1rem;
    cursor: pointer;

    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.4rem;
    font-weight: 700;
  }
`
