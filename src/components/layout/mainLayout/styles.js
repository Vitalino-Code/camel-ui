import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin: 7rem 1rem;
  width: calc(100% -2rem);
  min-height: calc(100vh - 388px);
  transition: 0.3s;

  @media (min-width: 1024px) {
    min-height: calc(100vh - 414px);
    margin: 7rem 7rem;
    transition: 0.3s;
  }

  @media (min-width: 1124px) {
    max-width: 100rem;
    margin: 7rem auto;
  }
`
