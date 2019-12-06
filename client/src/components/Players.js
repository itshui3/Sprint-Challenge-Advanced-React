import React from 'react'

export default function Players(props) {

  return (
    <>
      {
        props.players && props.players.map((player, index) => (
          <div key={index}>
            <p>{player.name}</p>
            <button onClick={() => props.addFavorite(player)}>Add to Favorites!</button>
          </div>
          
        ))
      }
    </>
  )
}