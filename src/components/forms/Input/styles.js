import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: var(--input-bg);
  padding: 1.6rem;
  border-radius: 0.5rem;

  display: flex;
  align-items: center;
  gap: 3rem;

  svg {
    width: 24px;
    height: 24px;
    fill: #2d3142;
  }

  &:focus-within {
    outline: ${({ theme }) => theme.COLORS.ORANGE} 2px solid;
  }

  &:focus-within > svg,
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
    fill: #2d3142;
  }

  input {
    background: none;
    border: none;
    outline: none;

    color: var(--white);
    font-size: 1.6rem;

    width: 100%;
  }

  input::placeholder {
    color: var(--input-description);
    font-size: 1.6rem;
  }
`
