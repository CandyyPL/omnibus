import styled from 'styled-components'

const QuizEndWrapper = styled.div`
  width: 100%;

  background-color: ${({ theme }) => theme.colors.light};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 20px 0 20px 0;

  h1,
  h2,
  h3 {
    margin: 0;
    margin-bottom: 20px;
  }

  h1 {
    font-size: 28px;
    font-family: ${({ theme }) => theme.fonts.fjalla};
    font-weight: bold;

    @media screen and (width >= 640px) {
      font-size: 42px;
    }

    @media screen and (width >= 1280px) {
      font-size: 50px;
    }
  }

  h2,
  h3 {
    font-family: ${({ theme }) => theme.fonts.nunito};
  }

  h2 {
    font-size: 22px;
  }

  h3 {
    font-size: 18px;
  }

  .finish {
    width: 200px;
    height: 60px;

    background-color: ${({ theme }) => theme.colors.blue};

    border: none;
    border-radius: 10px;

    font-size: 20px;
    font-family: ${({ theme }) => theme.fonts.nunito};
    font-weight: bold;
    color: white;

    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors.darkBlue};
    }
  }
`

const AnswersList = styled.ul`
  width: 90%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  padding: 0;
  list-style: none;
`

const Answer = styled.li`
  width: 100%;

  @media screen and (width >= 1024px) {
    width: 500px;
  }

  background-color: #fff;

  border: 2px solid black;
  border-radius: 4px;

  padding: 5px;

  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.nunito};
  /* font-weight: bold; */

  @media screen and (width >= 1024px) {
    font-size: 20px;
  }

  .question-info {
    width: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    margin-bottom: 10px;

    font-weight: bold;
  }

  .answer {
    display: flex;
    flex-direction: column;
  }

  .correct {
    color: ${({ theme }) => theme.colors.green};
  }

  .incorrect {
    color: ${({ theme }) => theme.colors.red};
  }
`

export default {
  QuizEndWrapper,
  AnswersList,
  Answer,
}
