import styled from 'styled-components'

const DashboardWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
`

const CategoryModal = styled.section`
  .category-modal-bg {
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

  .category-modal {
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

    .modal-subject {
      width: 90%;
      height: 60px;

      @media screen and (width >= 1024px) {
        width: 150px;
      }

      padding-inline: 20px;

      background-color: #fff;

      border: 2px solid #111;
      margin: 10px;

      font-size: 18px;
      font-family: fonts.$nunito;
      font-weight: normal;

      cursor: pointer;

      transition: background-color 0.2s;

      &:hover {
        background-color: #bbb;
      }
    }
  }
`

const MainContent = styled.main`
  width: 100%;

  background-color: #eee;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    margin: 0;
  }

  .dashboard-topbar {
    width: 90%;

    display: flex;
    justify-content: center;
    align-items: center;

    text-align: center;

    font-size: 18px;
    font-family: ${({ theme }) => theme.fonts.nunito};

    .username {
      font-weight: bold;
    }

    span {
      width: 90%;

      margin: 10px;
      padding: 5px;
      border-radius: 4px;
    }

    .warning {
      background-color: #ff4747;
    }

    .info {
      background-color: #5ca4a9;
    }

    button.resend {
      background-color: #dd2525;

      padding: 5px;
      border-radius: 4px;
      border: none;

      color: white;
    }
  }

  .dashboard-main-content {
    width: 100%;

    padding-top: 25px;
    padding-bottom: 25px;

    @media screen and (width >= 1024px) {
      padding-top: 50px;
      gap: 60px;
    }

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
  }

  .user-info {
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 28px;

    @media screen and (width >= 1024px) {
      flex-direction: row;
    }

    .rank-info {
      .rank-img {
        width: 100%;
        height: 80%;

        display: flex;

        img {
          height: 300px;
        }
      }

      .rank-name {
        width: 100%;

        display: flex;
        justify-content: center;

        font-size: 32px;
        font-family: ${({ theme }) => theme.fonts.nunito};
        font-weight: bold;
      }
    }

    .level-info {
      width: 75%;

      @media screen and (width >= 1024px) {
        width: 50%;
      }

      display: flex;
      flex-direction: column;
      align-items: center;

      .level {
        font-size: 46px;
        font-family: ${({ theme }) => theme.fonts.nunito};
        font-weight: bold;
        text-align: center;
      }

      .level-bar {
        width: 90%;
        max-width: 300px;
        height: 25px;

        @media screen and (width >= 1280px) {
          max-width: 700px;
        }

        background-color: #aaa;

        border: 2px solid #111;
        border-radius: 20px;

        position: relative;

        --bar-progress: 60%;

        &::after {
          content: '';

          position: absolute;
          top: 0;
          left: 0;

          width: 0%;
          height: 100%;

          background-color: #d34e68;

          // border: 4px solid #111;
          border-radius: 20px;

          padding-left: var(--bar-progress); // PROGRESS
        }
      }

      .player-summary-info {
        width: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 12px;

        @media screen and (width >= 1280px) {
          flex-direction: row;
        }

        margin-top: 20px;
        margin-bottom: 20px;

        .info-card {
          width: 100%;
          max-width: 400px;
          height: 75px;

          @media screen and (width >= 1280px) {
            max-width: 250px;
          }

          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          font-family: ${({ theme }) => theme.fonts.nunito};
          font-weight: bold;
          text-align: center;

          border: 3px solid #111;
          border-radius: 20px;

          .desc {
            width: 100%;
            height: 40%;

            font-size: 16px;
          }

          .value {
            width: 100%;
            height: 40%;

            font-size: 22px;
          }
        }

        .ov-score {
          background-color: ${({ theme }) => theme.colors.yellow};
        }

        .fav-subject {
          background-color: ${({ theme }) => theme.colors.lightBlue};
        }

        .last-game {
          background-color: ${({ theme }) => theme.colors.lightGreen};
        }
      }
    }
  }

  .game-info-wrapper {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 28px;

    .game-info {
      width: 90%;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 12px;

      @media screen and (width >= 1024px) {
        flex-direction: row;
      }

      .game-buttons {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;

        button {
          width: 250px;

          border: none;
          border-radius: 10px;

          font-size: 30px;
          font-family: ${({ theme }) => theme.fonts.nunito};
          font-weight: bold;
          color: #eee;

          cursor: pointer;
          position: relative;
        }

        .play {
          height: 140px;

          background-color: #386641;

          font-size: 50px;

          &:hover {
            background-color: #164420;
          }
        }

        .history {
          height: 100px;

          background-color: #912f40;

          &:hover {
            background-color: #700d20;
          }
        }
      }

      .last-game-info {
        width: 100%;
        max-width: 400px;

        background-color: #fff;

        border: 6px solid #aaa;
        border-radius: 10px;

        padding: 10px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .title {
          width: 100%;
          height: 15%;

          display: flex;
          justify-content: center;
          align-items: center;

          font-size: 22px;
          font-family: ${({ theme }) => theme.fonts.nunito};
          font-weight: bold;
          color: #111;
        }

        .info {
          width: 100%;
          height: 85%;

          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;

          div {
            width: 75%;
            height: 30%;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;

            font-family: ${({ theme }) => theme.fonts.nunito};
          }

          .value {
            font-weight: bolder;
            color: #111;
          }

          .name {
            font-weight: normal;
            color: #aaa;
          }

          .subject {
            .value {
              font-size: 20px;
            }
          }

          .answers {
            .value {
              font-size: 24px;
            }
          }

          .score {
            .value {
              font-size: 30px;
            }
          }
        }
      }
    }

    .divider {
      width: 8px;
      height: 100%;

      background-color: #666;
      border-radius: 10px;
      margin-inline: 10px;
    }

    .last-achv {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .title {
        width: 100%;
        height: 10%;

        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 30px;
        font-family: ${({ theme }) => theme.fonts.nunito};
        font-weight: bold;
        color: #111;
      }

      .achv-content {
        width: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 28px;

        .achv {
          background-color: #f0f7f4;
          border: 2px solid #111;

          .image {
            width: 100%;
            height: 75%;

            display: flex;

            img {
              height: 300px;
            }
          }

          .title {
            width: 100%;
            height: 25%;

            display: flex;

            font-size: 18px;
            font-family: ${({ theme }) => theme.fonts.nunito};
            font-weight: bold;
            color: #070707;
          }
        }
      }
    }
  }
`

export default {
  DashboardWrapper,
  CategoryModal,
  // Sidebar,
  MainContent,
}
