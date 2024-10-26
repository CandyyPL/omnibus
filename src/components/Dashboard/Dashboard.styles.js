import styled from 'styled-components'

const DashboardWrapper = styled.div`
  width: 100%;

  display: flex;
`

const CategoryModal = styled.section`
  .bg {
    width: 100vw;
    height: 100vh;

    position: fixed;
    z-index: 10;

    top: 0;
    left: 0;

    background-color: #eeeeee88;

    display: flex;
  }

  .category-modal {
    width: 600px;
    height: 400px;

    background-color: #ddd;

    border: 4px solid #fff;
    border-radius: 15px;
    padding: 25px;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    position: relative;

    .close {
      width: 25px;
      height: 25px;

      position: absolute;
      top: 10px;
      right: 10px;

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

    .subject {
      min-width: 100px;
      max-width: 250px;
      height: 60px;

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

// const Sidebar = styled.aside`
//   width: 20%;
//   height: 100%;

//   background-color: #fff;

//   padding: 40px 20px;

//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: center;

//   .logo {
//     font-size: 40px;
//     font-family: fonts.$montalt;
//     font-weight: bold;
//     text-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
//   }

//   ul {
//     width: 100%;
//     height: 40%;

//     display: flex;
//     flex-direction: column;
//     justify-content: space-evenly;

//     list-style: none;

//     font-size: 32px;
//     font-family: fonts.$nunito;
//     font-weight: bold;

//     li {
//       cursor: pointer;

//       width: fit-content;

//       position: relative;

//       transition: text-shadow 0.3s;

//       &::before {
//         content: '';

//         width: 100%;
//         height: 2px;

//         background-color: #111;

//         position: absolute;

//         bottom: 0;
//         left: 0;

//         transition: transform 0.3s;

//         transform: scaleX(0);
//         transform-origin: 0%;
//       }

//       &:hover {
//         text-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
//       }

//       &:hover::before {
//         transform: scaleX(1);
//       }
//     }
//   }

//   button {
//     width: 150px;
//     height: 60px;

//     background-color: transparent;

//     border: 4px solid #111;

//     font-size: 22px;
//     font-family: fonts.$nunito;
//     font-weight: bold;

//     cursor: pointer;

//     transition: all 0.2s;

//     &:hover {
//       background-color: #111;

//       color: #eee;
//     }
//   }
// `

const MainContent = styled.main`
  width: 100%;

  background-color: #eee;

  p {
    margin: 0;
  }

  .topbar {
    width: 100%;
    height: 75px;

    display: flex;
    justify-content: center;
    align-items: center;

    text-align: center;

    font-size: 20px;
    font-family: ${({ theme }) => theme.fonts.nunito};

    .username {
      font-weight: bold;
    }
  }

  .main-content {
    width: 100%;

    padding-top: 50px;
    padding-bottom: 50px;

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

      display: flex;
      flex-direction: column;

      .level {
        font-size: 46px;
        font-family: ${({ theme }) => theme.fonts.nunito};
        font-weight: bold;
        text-align: center;
      }

      .level-bar {
        width: 90%;
        height: 25px;

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

      .games-info {
        width: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 12px;

        margin-top: 20px;
        margin-bottom: 20px;

        .info-card {
          width: 100%;
          height: 75px;

          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          font-family: ${({ theme }) => theme.fonts.nunito};
          font-weight: bold;
          text-align: center;

          border: 2px solid #111;
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
          background-color: #f3a712;
        }

        .fav-subject {
          background-color: #52d1dc;
        }

        .last-game {
          background-color: #4ce0b3;
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
      gap: 12px;

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
