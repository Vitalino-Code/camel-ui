import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.COLORS.INPUT_BG};
  padding: 1.6rem;
  border-radius: 0.5rem;

  display: flex;
  align-items: center;
  gap: 3rem;

  color: ${({ theme }) => theme.COLORS.GRAY};

  &:focus-within {
    outline: ${({ theme }) => theme.COLORS.ORANGE} 2px solid;
  }

  &:focus-within > svg {
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  div:focus-within > button > svg {
    fill: ${({ theme }) => theme.COLORS.ORANGE};
  }

  div {
    width: 100%;
    display: flex;
    align-items: center;
  }

  div > button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  div > button > svg {
    fill: ${({ theme }) => theme.COLORS.GRAY};
  }

  input {
    background: none;
    border: none;
    outline: none;

    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 1.6rem;

    width: 100%;
  }

  input::placeholder {
    color: ${({ theme }) => theme.COLORS.INPUT_DESCRIPTION};
    font-size: 1.6rem;
  }
`
