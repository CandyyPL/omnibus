import styled from 'styled-components'

const Modal = styled.section`
  .modal-bg {
    width: 100vw;
    height: 100vh;

    position: fixed;
    z-index: 10;

    top: 0;
    left: 0;

    background-color: #eeeeee88;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-content {
    width: 80%;
    height: 400px;

    @media screen and (width >= 1024px) {
      width: 640px;
      height: 480px;
    }

    background-color: #ddd;

    border: 4px solid #fff;
    border-radius: 15px;
    padding: 25px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    @media screen and (width >= 1024px) {
      flex-direction: row;
      align-items: flex-start;
      align-content: flex-start;
      flex-wrap: wrap;
    }

    position: relative;

    .modal-close {
      width: 25px;
      height: 25px;

      position: absolute;
      top: 8px;
      right: 8px;

      background-color: #fff;

      border: none;
      border-radius: 5px;

      display: flex;
      justify-content: center;
      align-items: center;

      cursor: pointer;

      transition: background-color 0.2s;

      &:hover {
        background-color: #bbb;
      }

      img {
        height: 60%;
      }
    }
  }
`

export default {
  Modal,
}
