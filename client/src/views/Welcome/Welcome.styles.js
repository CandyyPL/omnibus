import { styled } from 'styled-components'

export const WelcomeWrapper = styled.div`
  width: 100%;
  height: 300vh;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const Content = styled.main`
  width: 100%;
  height: calc(300vh - 100px);

  background-color: ${({ theme }) => theme.color.light};

  .bus-img {
    width: 100%;
    height: 600px;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 60%;
    }
  }

  .welcome-info {
    width: 100%;
    height: calc(100% - 1000px);

    margin-inline: auto;

    background-color: #ddd;

    box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.5);

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    padding: 50px;

    .about {
      width: 70%;
      height: fit-content;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      h2 {
        width: 100%;

        font-size: 60px;
        font-family: ${({ theme }) => theme.font.fjalla};
      }

      .cards {
        width: 80%;
        height: 750px;

        display: grid;
        grid-template-rows: 1fr 1fr;
        grid-template-columns: 1fr 1fr;

        .card {
          width: 80%;
          height: 80%;

          &.st {
            background-color: #eb4833;
          }

          &.nd {
            background-color: #499f68;
          }

          &.rd {
            background-color: #4381c1;
          }

          &.th {
            background-color: #f8a312;
          }

          border: none;
          border-radius: 10px;
          padding: 20px;

          display: flex;
          justify-content: center;
          align-items: center;

          text-align: center;

          place-self: center;

          p {
            font-size: 24px;
            font-family: ${({ theme }) => theme.font.nunito};
            color: ${({ theme }) => theme.color.light};

            margin: 0;
          }
        }
      }
    }
  }

  footer {
    width: 100%;
    height: 400px;

    background-color: #2ca87f;
  }
`
