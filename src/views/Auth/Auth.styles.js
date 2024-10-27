import styled from 'styled-components'

const AuthWrapper = styled.main`
  width: 100%;
  height: 100vh;

  background-color: #eee;

  display: flex;
  flex-direction: column;
  align-items: center;
`

const EmailPopup = styled.section`
  .email-popup-bg {
    width: 100vw;
    height: 100vh;

    position: fixed;
    z-index: 10;

    top: 0;
    left: 0;

    background-color: #eeeeee88;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .email-popup-content {
    width: 80%;
    height: 200px;

    background-color: #ddd;

    border: 4px solid #fff;
    border-radius: 15px;
    padding: 25px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: relative;

    span {
      width: 100%;

      text-align: center;

      font-size: 20px;
      font-family: ${({ theme }) => theme.fonts.nunito};
    }

    .email-popup-close {
      width: 25px;
      height: 25px;

      position: absolute;
      top: 8px;
      right: 8px;

      background-color: #fff;

      border: none;
      border-radius: 5px;

      display: flex;
      justify-content: center;
      align-items: center;

      cursor: pointer;

      transition: background-color 0.2s;

      &:hover {
        background-color: #bbb;
      }

      img {
        height: 60%;
      }
    }
  }
`

const Form = styled.form`
  width: 500px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 40px;
    font-family: ${({ theme }) => theme.fonts.fjalla};
  }

  input {
    width: 350px;
    height: 60px;

    background-color: #fff;

    margin-bottom: 20px;

    border: none;
    border-radius: 10px;

    font-size: 22px;
    font-family: ${({ theme }) => theme.fonts.nunito};
    font-weight: bold;
    text-align: center;
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
`

export default {
  AuthWrapper,
  EmailPopup,
  Form,
}
