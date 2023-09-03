import styled from 'styled-components'

export const TopbarWrapper = styled.div`
  width: 100%;
  height: 100px;

  background-color: #2ca87f;

  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.5);

  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 3fr 1fr;

  z-index: 1;

  .title {
    width: 100%;
    height: 100%;

    grid-column: 2/3;

    display: flex;
    justify-content: center;
    align-items: center;

    .text {
      font-size: 40px;
      font-family: ${({ theme }) => theme.font.montalt};
      font-weight: bold;
      color: ${({ theme }) => theme.color.dark};

      cursor: default;
    }

    img {
      height: 50px;

      margin: 0 10px;

      &.left {
        transform: scaleX(-1);
      }
    }
  }

  .buttons {
    width: 100%;
    height: 100%;

    grid-column: 3/4;

    display: flex;
    justify-content: space-evenly;
    align-items: center;

    button {
      height: 50px;

      &.reg {
        width: 160px;
      }

      &.log {
        width: 120px;
      }

      background-color: #296b56;

      border: none;
      border-radius: 4px;

      font-size: 20px;
      font-family: ${({ theme }) => theme.font.nunito};
      font-weight: bold;
      color: ${({ theme }) => theme.color.light};

      cursor: pointer;

      &:hover {
        background-color: #174d34;
      }
    }
  }
`
