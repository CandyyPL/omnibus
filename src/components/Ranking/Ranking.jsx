import Topbar from '@/components/Topbar/Topbar.jsx'
import { getData } from '@/supa/dbFunctions'
import { useEffect, useState } from 'react'
import Style from './Ranking.styles.js'
import ranks from '@/helpers/ranks'

const Ranking = () => {
  const [players, setPlayers] = useState([])
  const [questionGroups, setQuestionGroups] = useState([])

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchDatabase = async () => {
      const allUsers = await getData('users', 'uid,username,totalScore,rank,level,favSubject')
      const catData = await getData('categories', 'id,cid,name')

      setPlayers(allUsers)
      setQuestionGroups(catData)
    }

    fetchDatabase()
      .then(() => setLoading(false))
      .catch((error) => console.log(error))
  }, [])

  return (
    !loading && (
      <Style.RankingWrapper>
        <Topbar title='RANKING' />
        <Style.Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Nazwa gracza</th>
              <th>Całkowity wynik</th>
              <th>Ranga</th>
              <th>Poziom</th>
              <th>Ulubiony przedmiot</th>
            </tr>
          </thead>
          <tbody>
            {players.length &&
              players
                .toSorted((a, b) => Number(b.totalScore) - Number(a.totalScore))
                .map((player, idx) => (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{player.username}</td>
                    <td>{player.totalScore}</td>
                    <td>
                      <img src={ranks[player.rank].img} alt='rank' />
                      {ranks[player.rank].name}
                    </td>
                    <td>{player.level}</td>
                    <td>
                      {questionGroups.find((e) => e.cid == player.favSubject)
                        ? questionGroups.find((e) => e.cid == player.favSubject).name
                        : 'Brak'}
                    </td>
                  </tr>
                ))}
          </tbody>
        </Style.Table>
      </Style.RankingWrapper>
    )
  )
}

export default Ranking
