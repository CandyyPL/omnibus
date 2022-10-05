import styled from 'styled-components'

export const HomeJoinPartWrapper = styled.div`
  width: 100%;

  @media only screen and (min-width: 360px) and (max-width: 720px) {
    height: 100vh;

    margin-top: 50px;

    flex-direction: column;
  }

  @media only screen and (min-width: 720px) {
    height: 80vh;

    margin-top: 50px;

    flex-direction: row-reverse;
  }

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export const JoinPartWarning = styled.div`
  @media only screen and (min-width: 360px) and (max-width: 720px) {
    width: 100%;
    height: 50%;

    @media only screen and (min-height: 600px) and (max-height: 700px) {
      img {
        height: 120px;
      }
    }

    @media only screen and (min-height: 700px) {
      img {
        height: 150px;
      }
    }
  }

  @media only screen and (min-width: 720px) {
    width: 50%;
    height: 100%;

    img {
      height: 50%;
    }
  }

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`

export const WarningBox = styled.div`
  @media only screen and (min-width: 360px) and (max-width: 720px) {
    width: 90%;

    @media only screen and (min-height: 600px) and (max-height: 700px) {
      height: 45%;
    }

    @media only screen and (min-height: 700px) {
      height: 40%;
    }

    font-size: 18px;
  }

  @media only screen and (min-width: 600px) {
    span {
      font-size: 22px;
    }
  }

  @media only screen and (min-width: 720px) {
    width: 90%;
    height: 20%;

    span {
      padding: 0 5px;
      font-size: 20px;
    }
  }

  background-color: red;

  border: none;
  border-radius: 10px;
  padding: 0 5px;

  font-family: ${({ theme }) => theme.fonts.default};
  font-weight: bold;
  color: #eee;

  display: flex;
  justify-content: center;
  align-items: center;

  span {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`
