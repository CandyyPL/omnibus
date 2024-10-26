import styled from 'styled-components'

const TopbarWrapper = styled.header`
  width: 100%;
  height: 100px;

  background-color: #2ca87f;

  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: space-around;
  align-items: center;

  z-index: 1;
`

const Title = styled.div`
  margin-right: 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  .text {
    font-size: 40px;
    font-family: ${({ theme }) => theme.fonts.montalt};
    font-weight: bold;
    color: ${({ theme }) => theme.colors.dark};

    cursor: default;

    text-decoration: none;
  }

  img {
    height: 50px;

    margin: 0 10px;

    &.left {
      transform: scaleX(-1);
    }
  }
`

const TopbarButtons = styled.div`
  width: 100%;
  height: 100%;

  grid-column: 3/4;

  display: none; //! CHANGE
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

    &.dshb {
      width: 180px;
    }

    background-color: #296b56;

    border: none;
    border-radius: 4px;

    font-size: 20px;
    font-family: fonts.$nunito;
    font-weight: bold;
    color: colors.$light;

    cursor: pointer;

    &:hover {
      background-color: #174d34;
    }
  }
`

const Burger = styled.div`
  background-color: transparent;

  border: 0;
  margin: 0;

  display: flex;

  cursor: pointer;

  position: relative;
  z-index: 2;

  transition: all 0.5s;

  &.active {
    .burger-inner {
      background-color: transparent;

      &::before {
        transform: translateY(10px) rotate(45deg);

        background-color: black;
      }

      &::after {
        transform: translateY(-10px) rotate(-45deg);

        background-color: black;
      }
    }
  }

  .burger-box {
    width: 40px;
    height: 50px;

    display: inline-block;

    position: relative;
  }

  .burger-inner {
    width: 100%;
    height: 4px;

    background-color: #eee;

    border-radius: 10px;

    position: absolute;

    top: 50%;
    left: 0;

    transform: translateY(-50%);
    transition: background-color 0.2s;

    &::before,
    &::after {
      width: 100%;
      height: 4px;

      background-color: #eee;

      border-radius: 10px;

      position: absolute;

      content: '';

      left: 0;

      transition: all 0.4s;
    }

    &::before {
      top: -10px;
    }

    &::after {
      top: 10px;
    }
  }
`

const MenuWrapper = styled.div`
  width: 100vw;
  height: 100vh;

  background-color: #fff;

  position: fixed;
  top: 0;
  left: 0;

  z-index: 1;

  transition: transform 0.5s;
  /* transform: translateX(-75vw); */

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  transition: transform 0.5s;

  transform: translateX(-100%);

  &.active {
    transform: translateX(0);
  }

  button {
    height: 60px;
    padding: 10px;

    background-color: #296b56;

    border: none;
    border-radius: 2px;

    font-size: 24px;
    font-family: ${({ theme }) => theme.fonts.nunito};
    /* font-weight: bold; */
    color: ${({ theme }) => theme.colors.light};

    cursor: pointer;

    &:hover {
      background-color: #174d34;
    }
  }
`

export default {
  TopbarWrapper,
  Title,
  TopbarButtons,
  Burger,
  MenuWrapper,
}
