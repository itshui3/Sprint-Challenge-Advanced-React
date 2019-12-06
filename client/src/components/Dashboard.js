import React from 'react'
//hooks
import { useButtonToggle } from '../hooks/useButtonToggle'
import { useFavoritism } from '../hooks/useFavoritism'

//components
import Favorites from './Favorites'
import Players from './Players'

export default function Dashboard(props) {
  const [buttons, pushButtons] = useButtonToggle({ faves: false, players: false })
  const [favorites, addFavorite, removeFavorite, describeFavorite] = useFavoritism([])

  return (
    <div className="dashboardCont">
      <h1>Welcome to the 2019 Women's World Cup!</h1>
      <div className="dashboardCont__playersOverall">
        <div className="dashboardCont__leftDiv">
          <button name="faves" onClick={ev => pushButtons(ev.target.name)}>See Favorited Players</button>
          {
            buttons.faves && favorites && <Favorites favorites={favorites} removeFavorite={removeFavorite} describeFavorite={describeFavorite} />
          }
        </div>
        <div className="dashboardCont__rightDiv">
          <button name="players" onClick={ev => pushButtons(ev.target.name)}>See All Players</button>
          {
            buttons.players && props.players.length && <Players players={props.players} addFavorite={addFavorite} />
          }
        </div>
      </div>
    </div>
  )
}