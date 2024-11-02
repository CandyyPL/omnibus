import styled from 'styled-components'

const ButtonsWrapper = styled.section`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  @media screen and (width >= 1280px) {
    flex-direction: row;
    justify-content: flex-end;
  }

  button {
    width: 200px;
    height: 60px;

    @media screen and (width >= 1280px) {
      width: 150px;
    }

    font-family: ${({ theme }) => theme.fonts.nunito};
    color: #eee;
  }
`

export default {
  ButtonsWrapper,
}
