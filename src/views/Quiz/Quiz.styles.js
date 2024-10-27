import styled from 'styled-components'

const QuizWrapper = styled.main`
  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.light};

  display: flex;
  justify-content: center;
  align-items: center;

  .question-wrapper {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export default {
  QuizWrapper,
}
