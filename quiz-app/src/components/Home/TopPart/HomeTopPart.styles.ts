import styled from 'styled-components'

export const HomeTopPartWrapper = styled.div`
  width: 100%;
  height: 75vh;

  background-color: #1d2f6f;

  display: flex;

  @media only screen and (min-width: 360px) and (max-width: 720px) {
    .small-width {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    }

    .large-width {
      display: none;
    }

    clip-path: polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0% 85%);

    @media only screen and (min-height: 600px) and (max-height: 700px) {
      img {
        height: 175px;
      }
    }

    @media only screen and (min-height: 700px) {
      img {
        height: 200px;
        margin-top: 20px;
      }
    }
  }

  @media only screen and (min-width: 720px) {
    .small-width {
      display: none;
    }

    .large-width {
      width: 100%;

      .join-motto {
        width: 100%;
        height: 15%;

        display: flex;
        justify-content: center;
        align-items: center;

        span {
          width: 100%;

          font-size: 40px;
          font-family: ${({ theme }) => theme.fonts.default};
          font-weight: bold;
          letter-spacing: 4px;
          color: #eee;

          display: flex;
          justify-content: center;
          align-items: center;

          button {
            width: 160px;
            height: 60px;

            background-color: #00a8e8;

            border: 4px solid white;
            border-radius: 10px;
            margin-inline: 20px;

            font-size: 32px;
            font-family: ${({ theme }) => theme.fonts.default};
            font-weight: bold;
            color: #eee;
          }
        }
      }

      .lower-content {
        width: 100%;

        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;

        img {
          height: 400px;
        }
      }
    }

    clip-path: polygon(
      0 0,
      100% 0,
      100% 100%,
      87.5% 95%,
      75% 100%,
      62.5% 95%,
      50% 100%,
      37.5% 95%,
      25% 100%,
      12.5% 95%,
      0 100%
    );
  }
`

export const TopPartInfoBox = styled.div`
  border: 6px dashed red;
  border-radius: 20px;
  margin: 20px 0;

  @media only screen and (min-width: 360px) and (max-width: 720px) {
    width: 80%;

    @media only screen and (min-height: 600px) and (max-height: 700px) {
      height: 45%;
    }

    @media only screen and (min-height: 700px) {
      height: 40%;
    }

    h1 {
      font-size: 20px;
      margin-top: 0;
    }

    span {
      width: 90%;
      font-size: 16px;
    }
  }

  @media only screen and (min-width: 720px) {
    width: min(40%, 500px);
    height: 300px;

    padding: 0 20px;

    h1 {
      font-size: 32px;
      margin-top: 0;
    }

    span {
      width: 90%;

      font-size: 18px;

      b {
        font-size: 20px;
      }
    }
  }

  background-color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: ${({ theme }) => theme.fonts.default};
  color: #111;
  text-align: center;
`
