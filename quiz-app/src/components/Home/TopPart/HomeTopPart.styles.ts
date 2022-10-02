import styled from 'styled-components'

export const HomeTopPartWrapper = styled.div`
  width: 100%;

  @media only screen and (min-width: 360px) and (max-width: 720px) {
    height: 75vh;
    clip-path: polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0% 85%);

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

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

  background-color: #1d2f6f;
`

export const TopPartInfoBox = styled.div`
  @media only screen and (min-width: 360px) and (max-width: 720px) {
    width: 80%;

    @media only screen and (min-height: 600px) and (max-height: 700px) {
      height: 45%;
    }

    @media only screen and (min-height: 700px) {
      height: 40%;
    }

    border: 6px dashed red;
    border-radius: 20px;
    margin: 20px 0;

    h1 {
      font-size: 20px;
      margin-top: 0;
    }

    span {
      width: 90%;
      text-align: center;
      font-size: 16px;
    }
  }

  background-color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: ${({ theme }) => theme.fonts.default};
  color: #111;
`
