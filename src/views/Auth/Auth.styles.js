import styled from 'styled-components'

const AuthWrapper = styled.main`
  width: 100%;
  height: 100vh;

  background-color: #eee;

  display: flex;
  flex-direction: column;
  align-items: center;
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
  Form,
}
