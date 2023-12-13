import styled from 'styled-components'

export const Table = styled.table`
  margin: 2rem auto;
  color: black;
  border-collapse: collapse;

  thead {
    background-color: ${({ theme }) => theme.COLORS.GRAY};
    color: white;
  }

  td,
  th {
    padding: 1rem;
    border: 1px solid black;
  }
`

export const Options = styled.div`
  display: flex;
  justify-content: space-around;
`

export const Span = styled.div`
  position: fixed;
  top: calc((100vh / 2) - ${props => (props.$size ? '55px' : '150px')});
  right: calc((100vw / 2) - 200px);
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 2rem;
  border-radius: 1.5rem;
  z-index: 1002;

  background-color: ${({ theme }) => theme.COLORS.GRAY};

  & > p {
    margin: auto;
  }

  & > div {
    display: flex;
    justify-content: space-around;
  }

  & > div > button {
    margin: 2rem 0 0 0;
    padding: 1rem 2rem;
    border-radius: 1rem;
    display: flex;
    gap: 1rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  ${props =>
    props.$show
      ? `transform: translateX(0);
        transition: 0.3s;`
      : `height: 0px;
        padding-block: 0;
        transition: opacity 0.3s ease 0s;
        overflow: hidden;
        transition: 0.2s;`}
`
export const LockScreen = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  z-index: 1001;
  background-color: #2d314369;

  ${props =>
    props.$show
      ? `z-index: 1000;`
      : `display: none
        `};
`

export const EditForm = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  & > h3 {
    margin: 2rem 0 2rem 0;
  }
  & > form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: space-between;
  }

  & > div {
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem 0;
    :hover {
      cursor: pointer;
    }
  }
`
