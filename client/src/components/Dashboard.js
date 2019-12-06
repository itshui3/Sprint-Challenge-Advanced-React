import React from 'react'
import { useButtonToggle } from '../hooks/useButtonToggle'

export default function Dashboard(props) {
  const [buttons, pushButtons] = useButtonToggle({ faves: false, players: false })
  return (
    <div className="dashboardCont">
      <h1>Welcome to the 2019 Women's World Cup!</h1>
      <div className="dashboardCont__playersOverall">
        <div className="dashboardCont__leftDiv">
          <button name="faves" onClick={ev => pushButtons(ev.target.name)}>See Favorited Players</button>

        </div>
        <div className="dashboardCont__rightDiv">
          <button name="players" onClick={ev => pushButtons(ev.target.name)}>See All Players</button>

        </div>
      </div>
    </div>
  )
}