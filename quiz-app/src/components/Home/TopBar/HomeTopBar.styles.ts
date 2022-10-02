import styled from 'styled-components'

export const HomeTopBarWrapper = styled.div`
  width: 100%;
  height: 100px;

  background-color: #087f8c;

  display: flex;
  justify-content: center;
  align-items: center;

  .center {
    @media only screen and (min-width: 360px) {
      width: 100%;
    }

    width: 25%;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 50px;

      margin-inline: 10px;

      &:first-child {
        transform: scaleX(-1);
      }
    }

    span {
      font-size: 36px;
      font-family: ${({ theme }) => theme.fonts.chango};
      color: #eee;
    }
  }
`
