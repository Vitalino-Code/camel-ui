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
