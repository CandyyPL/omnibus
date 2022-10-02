import styled from 'styled-components'

export const JoinPartFormWrapper = styled.form`
  width: 100%;

  @media only screen and (min-width: 360px) and (max-width: 720px) {
    height: 50%;

    h1 {
      font-size: 34px;
      font-family: ${({ theme }) => theme.fonts.default};
      margin: 0;
      margin-bottom: 25px;
    }

    input {
      width: 80%;
      height: 60px;

      border: none;
      border-radius: 10px;
      margin-bottom: 20px;

      font-family: ${({ theme }) => theme.fonts.default};
      text-align: center;
      font-size: 18px;
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

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: ${({ theme }) => theme.fonts.default};
  }
`

export const ClassChoice = styled.div`
  @media only screen and (min-width: 360px) and (max-width: 720px) {
    width: 80%;
    height: 15%;

    margin-bottom: 20px;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    font-size: 20px;
    font-family: ${({ theme }) => theme.fonts.default};
    font-weight: bold;

    .option {
      width: 35px;
      height: 40px;

      border: 4px solid #aaa;
      border-radius: 10px;

      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 20px;
    }
  }
`
