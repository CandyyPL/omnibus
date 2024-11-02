import styled from 'styled-components'

const RankingWrapper = styled.main`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  td,
  th {
    padding: 5px;
  }

  td {
    text-align: center;

    img {
      height: 30px;

      margin: 5px;
    }
  }
`

const RankingList = styled.ul`
  width: 90%;

  background-color: #eee;

  list-style: none;

  display: flex;
  flex-direction: column;
  gap: 12px;

  margin-top: 25px;
  border-radius: 5px;
  padding: 0;

  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.nunito};
`

const PlayerEntry = styled.li`
  width: 100%;

  background-color: #fff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media screen and (width >= 1280px) {
    height: 120px;

    flex-direction: row;
    justify-content: space-between;
    gap: 0;
  }

  border: 3px solid ${({ theme }) => theme.colors.grey};
  border-radius: 10px;
  padding: 10px;

  &:first-child {
    border: 3px solid ${({ theme }) => theme.colors.yellow};

    .player-ranking {
      background-color: ${({ theme }) => theme.colors.yellow};
    }
  }

  &:nth-child(2) {
    border: 3px solid ${({ theme }) => theme.colors.blue};

    .player-ranking {
      background-color: ${({ theme }) => theme.colors.blue};
    }
  }

  .player-ranking {
    height: 30px;

    background-color: ${({ theme }) => theme.colors.grey};

    border-radius: 15px;
    padding: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;

    font-size: 20px;
    font-weight: bold;
  }

  .player-info {
    width: 100%;
    height: 100%;

    @media screen and (width >= 1280px) {
      width: 75%;
    }

    display: flex;
    justify-content: space-around;
    align-items: center;

    font-size: 16px;

    .player-ranking-info {
      width: 30%;
      height: 100%;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 8px;

      text-align: center;

      .info-name {
        font-weight: bold;
      }
    }
  }

  img {
    height: 50px;
  }
`

export default {
  RankingWrapper,
  RankingList,
  PlayerEntry,
}
