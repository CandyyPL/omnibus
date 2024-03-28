import './Ranking.scss'
import { getData } from '@/supa/dbFunctions'
import { useEffect, useState } from 'react'

const Ranking = () => {
  const [players, setPlayers] = useState([])

  useEffect(() => {
    ;(async () => {
      const allUsers = await getData('users', 'uid,username,totalScore')
      setPlayers(allUsers)
    })()

    setPlayers((prev) => players.sort((a, b) => a.totalScore - b.totalScore))
  }, [])

  return (
    <div className='ranking-wrapper'>
      <table>
        <thead>
          <td>#</td>
          <td>Nazwa gracza</td>
          <td>Całkowity wynik</td>
        </thead>
        <tbody>
          {players.map((p, i) => (
            <tr>
              <td>{i + 1}</td>
              <td>{p.username}</td>
              <td>{p.totalScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Ranking
