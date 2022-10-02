import styled from 'styled-components'

export const HomeFooterPartWrapper = styled.div`
  width: 100%;

  @media only screen and (min-width: 360px) and (max-width: 720px) {
    height: 20vh;
  }
`

export const Quote = styled.div`
  @media only screen and (min-width: 360px) and (max-width: 720px) {
    width: 90%;
    height: 45%;

    font-size: 20px;
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

  @media only screen and (min-width: 360px) and (max-width: 720px) {
    height: 55%;

    flex-direction: column;
    justify-content: center;

    .title {
      font-size: 22px;
      letter-spacing: 2px;
    }

    .subtitle {
      font-size: 14px;
    }
  }

  background-color: #222;

  display: flex;
  align-items: center;

  font-family: ${({ theme }) => theme.fonts.nunito};
  font-weight: bold;
  color: #eee;
`
