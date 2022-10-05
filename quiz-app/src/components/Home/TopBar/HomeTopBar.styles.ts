import styled from 'styled-components'

export const HomeTopBarWrapper = styled.div`
  width: 100%;
  height: 100px;

  background-color: #087f8c;

  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 360px) and (max-width: 720px) {
    .small-width {
      display: flex;
    }

    .large-width {
      display: none;
    }
  }

  @media only screen and (min-width: 720px) {
    .small-width {
      display: none;
    }

    .large-width {
      display: flex;
    }
  }

  span {
    font-size: 36px;
    font-family: ${({ theme }) => theme.fonts.chango};
    color: #eee;
  }

  .small-width {
    width: 90%;
    justify-content: space-between;

    img {
      height: 50px;
    }
  }

  .large-width {
    width: 90%;
    justify-content: space-between;
  }

  .left {
    width: 25%;
  }

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
  }

  .right {
    width: 25%;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    button {
      width: 120px;
      height: 60px;

      background-color: #1d2f6f;

      border: 4px solid white;
      border-radius: 10px;

      font-size: 14px;
      font-family: ${({ theme }) => theme.fonts.default};
      font-weight: bold;
      color: #eee;

      cursor: pointer;

      &:hover {
        border: 4px solid #aaa;
      }
    }
  }
`
