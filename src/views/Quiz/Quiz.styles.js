import styled from 'styled-components'

const QuizWrapper = styled.main`
  width: 100%;
  height: 100vh;

  background-color: #eee;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  h1 {
    font-size: 32px;
    font-family: ${({ theme }) => theme.fonts.fjalla};

    @media screen and (width >= 640px) {
      font-size: 42px;
    }

    @media screen and (width >= 1280px) {
      font-size: 50px;
    }
  }

  h3 {
    font-size: 28px;
    font-family: ${({ theme }) => theme.fonts.nunito};
    font-weight: normal;
  }

  .question-wrapper {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const Question = styled.div`
  width: 90%;

  @media screen and (width >= 1280px) {
    max-width: 50%;
  }

  margin-bottom: 20px;

  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.nunito};
  font-weight: bold;
  text-align: center;
`

const Answers = styled.div`
  width: 90%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  button.answer {
    width: 100%;
    max-width: 400px;
    min-height: 40px;

    @media screen and (width >= 1024px) {
      min-height: 60px;
      max-height: 120px;
    }

    background-color: #fff;

    border: 2px solid black;
    border-radius: 4px;

    padding: 5px;

    cursor: pointer;

    font-size: 18px;
    font-family: ${({ theme }) => theme.fonts.nunito};
    text-align: center;
    word-wrap: break-word;

    &:hover {
      background-color: #ddd;
    }
  }
`

export default {
  QuizWrapper,
  Question,
  Answers,
}
