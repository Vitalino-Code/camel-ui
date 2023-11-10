import styled from 'styled-components'

export const Layout = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY};
  color: ${({ theme }) => theme.COLORS.WHITE};

  div {
    display: flex;
    flex-direction: column;
    gap: 5rem;

    margin: 7rem 2rem;
    animation: fromLeftToRight 0.8s;
  }

  hr {
    background-color: #3f445a;
    border: none;
    width: 100%;
    height: 0.1rem;
  }

  @keyframes fromLeftToRight {
    from {
      opacity: 0;
      transform: translateX(-10rem);
    }

    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (min-width: 1024px) {
    background-color: ${({ theme }) => theme.COLORS.BODY_BG};

    div {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      background-color: ${({ theme }) => theme.COLORS.GRAY};
      border-radius: 1rem;
      padding: 3rem 6rem;

      gap: 5rem;
    }

    hr {
      height: 50rem;
      width: 0.1rem;
    }
  }
`
