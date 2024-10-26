import styled from 'styled-components'

const WelcomeWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

const WelcomeContent = styled.main`
  background-color: ${({ theme }) => theme.colors.light};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .bus-img {
    height: 150px;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 60%;
    }
  }
`

const CardsWrapper = styled.section`
  width: 100%;
  height: 100%;

  margin-bottom: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  .card-wrapper {
    width: 90%;
    height: 100%;

    h3 {
      font-size: 28px;
      font-family: ${({ theme }) => theme.fonts.fjalla};
      font-weight: bold;
      text-align: center;

      margin: 0;
      margin-bottom: 12px;
    }
  }

  .card {
    width: 100%;
    height: 100%;

    &.st {
      background-color: #eb4833;
    }

    &.nd {
      background-color: #499f68;
    }

    &.rd {
      background-color: #4381c1;
    }

    &.th {
      background-color: #f8a312;
    }

    border: none;
    border-radius: 10px;
    padding: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    text-align: left;

    place-self: center;

    p {
      font-size: 22px;
      font-family: ${({ theme }) => theme.fonts.nunito};
      color: colors.$light;

      margin: 0;
    }
  }
`

const JoinWrapper = styled.section`
  width: 100%;

  margin-bottom: 40px;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  .join-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
      font-size: 40px;
      font-family: ${({ theme }) => theme.fonts.fjalla};
      text-align: center;
    }

    input {
      width: 350px;
      height: 60px;

      background-color: #fff;

      border: none;
      border-radius: 10px;

      font-size: 22px;
      font-family: ${({ theme }) => theme.fonts.nunito};
      font-weight: bold;
      text-align: center;

      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }

    .grade-select {
      width: 100%;
      height: 80px;

      padding: 10px 0;

      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 22px;
      font-family: ${({ theme }) => theme.fonts.nunito};
      font-weight: bold;

      span {
        margin-right: 5px;
      }

      .grade {
        width: 30px;
        height: 35px;

        border: 3px solid #111;
        border-radius: 5px;

        margin: 5px;

        display: flex;
        justify-content: center;
        align-items: center;

        &.selected {
          border: 3px solid #009de0;

          color: #009de0;
        }
      }
    }

    button {
      width: 300px;
      height: 60px;

      background-color: #009de0;

      border: none;
      border-radius: 5px;

      margin-top: 20px;

      font-size: 20px;
      font-family: ${({ theme }) => theme.fonts.nunito};
      font-weight: bold;
      color: #fff;

      cursor: pointer;

      &:hover {
        background-color: #007bc0;
      }
    }
  }

  .bus {
    margin-top: 40px;
    margin-bottom: 40px;

    img {
      height: 200px;
    }
  }
`

const Footer = styled.footer`
  width: 100%;
  height: 100px;

  background-color: #2ca87f;

  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: #eee;
  }

  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.nunito};
  font-weight: bold;
`

export default {
  WelcomeWrapper,
  WelcomeContent,
  CardsWrapper,
  JoinWrapper,
  Footer,
}
