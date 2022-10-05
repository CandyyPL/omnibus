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

      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;

      img {
        height: 50%;
      }
    }
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
    width: 500px;
    height: 300px;

    padding: 0 25px;
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
