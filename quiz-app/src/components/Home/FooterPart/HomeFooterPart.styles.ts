import styled from 'styled-components'

export const HomeFooterPartWrapper = styled.div`
  width: 100%;

  @media only screen and (min-width: 360px) and (max-width: 720px) {
    height: 20vh;
  }

  @media only screen and (min-width: 720px) {
    height: 100px;
  }
`

export const Quote = styled.div`
  width: 90%;
  height: 45%;

  @media only screen and (min-width: 360px) and (max-width: 720px) {
    font-size: 20px;
  }

  @media only screen and (min-width: 720px) {
    font-size: 32px;
  }

  margin: 20px auto;

  font-family: ${({ theme }) => theme.fonts.quote};
  font-weight: bold;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Footer = styled.div`
  width: 100%;
  height: 55%;

  @media only screen and (min-width: 360px) and (max-width: 720px) {
    flex-direction: column;
    justify-content: center;

    .title {
      font-size: 22px;
    }

    .subtitle {
      font-size: 14px;
    }
  }

  @media only screen and (min-width: 720px) {
    flex-direction: row;
    justify-content: space-between;

    padding: 20px;

    .title {
      font-size: 26px;
    }

    .subtitle {
      font-size: 16px;
    }
  }

  .title {
    letter-spacing: 2px;
  }

  background-color: #222;

  display: flex;
  align-items: center;

  font-family: ${({ theme }) => theme.fonts.default};
  font-weight: bold;
  color: #eee;
`
