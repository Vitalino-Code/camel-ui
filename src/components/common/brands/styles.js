import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  color: ${({ theme }) => theme.COLORS.BLACK};
  width: 100%;
  padding: 2.4rem;
  border-radius: 1rem;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 7rem;

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

    a {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    max-width: 100%;
    object-fit: cover;
  }

  h2 {
    font-size: 1.8rem;
    margin-bottom: 2.4rem;
  }
  .swiper-button-prev,
  .swiper-button-next {
    color: #f08605;
  }
`

export const SwiperContainer = styled.ul`
  img {
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
  }

  span {
    color: ${({ theme }) => theme.COLORS.BLACK};
    font-size: 1.6rem;
  }
`
