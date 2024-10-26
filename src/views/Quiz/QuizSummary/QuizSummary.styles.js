import styled from 'styled-components'

const QuizEndWrapper = styled.div`
  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.light};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ul {
    padding: 0;
    list-style: none;
  }
`

export default {
  QuizEndWrapper,
}
