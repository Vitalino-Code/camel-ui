import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    'categories logo userButton'
    'searchBar searchBar searchBar';

  height: 15rem;
  width: 100%;
  padding: 1.6rem;

  background-color: ${({ theme }) => theme.COLORS.GRAY};

  @media (min-width: 1024px) {
    grid-template-areas:
      'logo searchBar userButton'
      'categories categories categories';
    grid-template-columns: 15% 1fr 12%;
    column-gap: 10rem;
    row-gap: 30px;
    padding: 3rem 0 0 0;
    height: fit-content;
  }
`

export const Categories = styled.div`
  grid-area: categories;
  display: flex;
  position: relative;

  & > button > svg {
    stroke: ${({ theme }) => theme.COLORS.WHITE};
  }

  & > button > p {
    display: none;
  }

  @media (min-width: 1024px) {
    position: relative;

    display: grid;
    grid-template-columns: 12rem 1fr;
    gap: 10rem;

    padding: 0.5rem 20rem 0.5rem 1.6rem;

    background-color: ${({ theme }) => theme.COLORS.ORANGE};

    & > button {
      display: flex;
      align-items: center;
      gap: 1rem;

      color: ${({ theme }) => theme.COLORS.WHITE};
      font-weight: 700;
      font-size: 1.6rem;
      text-transform: uppercase;

      padding-right: 1.6rem;
      border-radius: 1rem;
    }

    & > button > p {
      display: block;
    }
  }
`

export const ToggleCategories = styled.div`
  position: absolute;
  left: -16px;
  top: 134px;
  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  z-index: 2;

  overflow-y: auto;
  display: flex;
  justify-content: center;

  width: 100vw;
  height: calc(100vh - 150px);

  & > button {
    position: absolute;
    top: 5px;
    right: 5px;

    & > svg {
      fill: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

  & > ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: fit-content;
    gap: 2rem;
    margin-block: 2rem;

    & > :hover {
      border: 0.2rem solid #fff;
    }
  }

  & > ul > li {
    font-size: 2rem;
    font-weight: 600;
    padding: 0.6rem 1.2rem;
    border: 0.2rem solid transparent;
    border-radius: 1rem;
    cursor: pointer;

    display: flex;
    align-items: center;
    text-align: center;

    & > a:hover {
      filter: brightness(1);
    }
  }

  /* Controle de transição */
  ${props =>
    props.$show
      ? `transform: translateX(0);
        transition: 0.3s;`
      : `height: 0px;
      transition: opacity 0.3s ease 0s;
      overflow: hidden;
      transition: 0.2s;`}

  @media (min-width: 1024px) {
    position: absolute;
    top: 54px;
    left: -16px;

    width: 50rem;
  }

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.GRAY};
    border-radius: 10px;
    border: 2px solid ${({ theme }) => theme.COLORS.ORANGE};
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.COLORS.ORANGE};
  }
`

export const LockScreen = styled.div`
  @media (min-width: 1024px) {
    ${props =>
      props.$show
        ? `z-index: 1000;`
        : `display: none
        `};
    position: absolute;
    opacity: 0.2;
    top: 54px;
    left: 48.4rem;

    background-color: ${({ theme }) => theme.COLORS.GRAY};
    width: calc(100vw - 48.5rem);
    height: calc(100vh - 134px);
  }
`

export const FixedCategories = styled.ul`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    width: 100%;
    padding: 5px 0;
    overflow: hidden !important;

    & > :hover {
      border: 0.2rem solid #fff;

      a {
        filter: brightness(1);
      }
    }

    & > li {
      font-weight: 700;
      padding: 0.6rem 1.2rem;
      border: 0.2rem solid transparent;
      border-radius: 1rem;
      cursor: pointer;

      display: flex;
      align-items: center;
      text-align: center;

      & > a {
        white-space: nowrap;
      }
    }
  }
`

export const Logo = styled.div`
  grid-area: logo;

  display: flex;
  justify-content: center;
  align-items: center;

  & > a > img {
    width: 8rem;
  }

  @media (min-width: 1024px) {
    justify-content: flex-end;

    & > a > img {
      width: 10rem;
    }
  }
`

export const UserButton = styled.div`
  grid-area: userButton;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  z-index: 1001;
  position: relative;

  & > button > svg {
    fill: ${({ theme }) => theme.COLORS.ORANGE};
  }

  @media (min-width: 1024px) {
    justify-content: flex-start;

    & > button > svg {
      width: 30px;
      height: 30px;
    }
  }
`

export const UserArea = styled.div`
  position: absolute;
  top: 15rem;

  display: flex;
  flex-direction: column;
  gap: 3rem;

  background-color: ${({ theme }) => theme.COLORS.GRAY};
  width: 20rem;
  padding-block: 2.7rem;
  border-radius: 1rem;
  box-shadow:
    0 8px 10px -5px rgb(0 0 0 / 20%),
    0 16px 24px 2px rgb(0 0 0 / 14%),
    0 6px 30px 5px rgb(0 0 0 / 12%);

  z-index: 998;

  & > div {
    display: block;

    position: absolute;
    top: -1rem;
    right: 0.4rem;

    border-left: 25px solid transparent;
    border-right: 25px solid transparent;
    border-bottom: 25px solid ${({ theme }) => theme.COLORS.GRAY};
  }

  & > ul {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
  }

  & > ul > li > a {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3rem;

    padding-inline: 2rem;
    transition: opacity 0.3s ease 0s;

    & > svg {
      fill: ${({ theme }) => theme.COLORS.ORANGE};
    }
  }

  & > button {
    margin: auto;
    width: 80%;
    padding: 10px;
  }

  @media (min-width: 1024px) {
    top: 12rem;
    right: 14rem;
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

export const SearchBar = styled.div`
  grid-area: searchBar;
  position: relative;

  margin: auto 0;
  display: flex;

  background-color: #fff;
  padding: 0.6rem 1.2rem;
  border-radius: 0.5rem;
  height: fit-content;

  & > input {
    background: none;
    border: none;
    outline: none;
    width: 100%;
    font-size: 1.3rem;
  }

  & > svg {
    fill: ${({ theme }) => theme.COLORS.GRAY};
  }
`

export const SeachResults = styled.div`
  position: absolute;
  top: 27px;
  left: 0px;

  width: 100%;
  padding: 0.6rem 1.2rem;
  border-radius: 0 0 0.5rem 0.5rem;

  background-color: white;
  color: ${({ theme }) => theme.COLORS.GRAY};
  box-shadow: 5px 10px 20px -1px rgba(0, 0, 0, 0.5);
  text-align: start;

  & > a {
    display: block;
    color: ${({ theme }) => theme.COLORS.GRAY};
  }

  & > span {
    text-align: center;
    display: block;
  }

  ${props =>
    props.$showSearchResult
      ? `transform: translateX(0);
        transition: 0.3s;`
      : `height: 0px;
      padding-block: 0;
      transition: opacity 0.3s ease 0s;
      overflow: hidden;
      transition: 0.2s;`}
`

export const SearchButton = styled.button`
  background-color: none;
  display: flex;
  justify-content: center;
  align-items: center;
`
