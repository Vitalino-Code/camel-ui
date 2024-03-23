import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  color: ${({ theme }) => theme.COLORS.BLACK};
  width: 100%;
  padding: 2.4rem;
  border-radius: 1rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 7rem;
  margin-top: 5rem;

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: #f08605;
  }
`

export const SwiperContainer = styled.ul`
  img {
    background-color: ${({ theme }) => theme.COLORS.GRAY};
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
  }

  span {
    color: ${({ theme }) => theme.COLORS.BLACK};
    font-weight: 700;
    text-align: center;
    font-size: 1.6rem;
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }

  .discount {
    color: ${({ theme }) => theme.COLORS.BLACK};
    font-weight: 700;
    text-align: center;

    font-size: 1.6rem;
    text-decoration: line-through;
  }
  .price {
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`
