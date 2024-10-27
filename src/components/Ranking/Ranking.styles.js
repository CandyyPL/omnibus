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

const Table = styled.table`
  width: 90%;

  background-color: #eee;

  margin-top: 25px;
  border-radius: 5px;

  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.nunito};

  tbody tr:nth-child(n) {
    background-color: #ddd;
  }

  tbody tr:nth-child(2n) {
    background-color: #ccc;
  }
`

export default {
  RankingWrapper,
  Table,
}
