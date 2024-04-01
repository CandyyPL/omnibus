import './Ranking.scss'
import { getData } from '@/supa/dbFunctions'
import { useEffect, useState } from 'react'
import ranks from '@/helpers/ranks'

const Ranking = () => {
  const [players, setPlayers] = useState([])
  const [questionGroups, setQuestionGroups] = useState([])

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      const allUsers = await getData('users', 'uid,username,totalScore,rank,level,favSubject')
      const catData = await getData('categories', 'id,cid,name')

      setPlayers(allUsers)
      setQuestionGroups(catData)
      setLoading(false)
    })()
  }, [])

  return (
    !loading && (
      <div className='ranking-wrapper'>
        <table>
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
                .map((p, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{p.username}</td>
                    <td>{p.totalScore}</td>
                    <td>
                      <img src={ranks[p.rank].img} alt='rank' />
                      {ranks[p.rank].name}
                    </td>
                    <td>{p.level}</td>
                    <td>
                      {questionGroups.find((e) => e.cid == p.favSubject)
                        ? questionGroups.find((e) => e.cid == p.favSubject).name
                        : 'Brak'}
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    )
  )
}

export default Ranking
