import styled from 'styled-components'

export const JoinPartFormWrapper = styled.form`
  @media only screen and (min-width: 360px) and (max-width: 720px) {
    width: 100%;
    height: 50%;

    h1 {
      font-size: 34px;
    }

    input {
      width: 80%;
      height: 60px;
    }

    button {
      width: 75%;
      height: 60px;

      background-color: #1d2f6f;

      border: none;
      border-radius: 10px;

      font-size: 20px;
      font-family: ${({ theme }) => theme.fonts.default};
      font-weight: bold;
      color: #eee;
    }
  }

  @media only screen and (min-width: 720px) {
    width: 50%;
    height: 100%;

    h1 {
      font-size: 40px;
      font-family: ${({ theme }) => theme.fonts.default};
      margin: 0;
      margin-bottom: 25px;
    }

    input {
      width: 60%;
      height: 55px;
    }

    button {
      width: 50%;
      height: 60px;
    }
  }

  input {
    border: none;
    border-radius: 10px;
    margin-bottom: 20px;

    font-family: ${({ theme }) => theme.fonts.default};
    text-align: center;
    font-size: 18px;
  }

  h1 {
    font-family: ${({ theme }) => theme.fonts.default};
    margin: 0;
    margin-bottom: 25px;
  }

  button {
    background-color: #1d2f6f;

    border: none;
    border-radius: 10px;

    font-size: 20px;
    font-family: ${({ theme }) => theme.fonts.default};
    font-weight: bold;
    color: #eee;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ClassChoice = styled.div`
  @media only screen and (min-width: 360px) and (max-width: 720px) {
    width: 80%;
    height: 15%;
  }

  @media only screen and (min-width: 720px) {
    width: 65%;
    height: 5%;
  }

  margin-bottom: 20px;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.default};
  font-weight: bold;
`

export const ClassOption = styled.div`
  width: 35px;
  height: 40px;

  border: 4px solid #aaa;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 20px;
`
