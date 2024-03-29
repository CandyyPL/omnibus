import './Ranking.scss'
import { getData } from '@/supa/dbFunctions'
import { useEffect, useState } from 'react'
import ranks from '@/helpers/ranks'

const Ranking = () => {
  const [players, setPlayers] = useState([])

  useEffect(() => {
    ;(async () => {
      const allUsers = await getData('users', 'uid,username,totalScore,rank,level,favSubject')
      setPlayers(allUsers)
    })()
  }, [])

  return (
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
          {players
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
                <td>{p.favSubject}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Ranking
