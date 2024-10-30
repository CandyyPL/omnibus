import Topbar from '@/components/Topbar/Topbar.jsx'
import { getData } from '@/supa/dbFunctions'
import { useEffect, useState } from 'react'
import Style from './Ranking.styles.js'
import ranks from '@/helpers/ranks'

const DEFAULT_TOPBAR_TITLE = 'RANKING'
const DEFAULT_TOPBAR_TITLE_URL = '#'

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
        <Topbar title={DEFAULT_TOPBAR_TITLE} titleUrl={DEFAULT_TOPBAR_TITLE_URL} />
        <Style.RankingList>
          {players.length &&
            players
              .toSorted((a, b) => Number(b.totalScore) - Number(a.totalScore))
              .map((player, idx) => (
                <Style.PlayerEntry key={idx}>
                  <div className='ranking-player'>
                    <div>#{idx + 1}</div>
                    <div>{player.username}</div>
                    <div>Poz {player.level}</div>
                  </div>
                  <div className='player-info'>
                    <div className='ranking-player-info'>
                      <span className='info-name'>Całkowity wynik</span>
                      {player.totalScore}
                    </div>
                    <div className='ranking-player-info'>
                      <span className='info-name'>Ranga</span>
                      <img src={ranks[player.rank].img} alt='rank' />
                      {ranks[player.rank].name}
                    </div>
                    <div className='ranking-player-info'>
                      <span className='info-name'>Ulubiony przedmiot</span>
                      {questionGroups.find((e) => e.cid == player.favSubject)
                        ? questionGroups.find((e) => e.cid == player.favSubject).name
                        : 'Brak'}
                    </div>
                  </div>
                </Style.PlayerEntry>
              ))}
        </Style.RankingList>
      </Style.RankingWrapper>
    )
  )
}

export default Ranking
