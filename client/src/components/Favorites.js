import React from 'react'

export default function Favorites(props) {

  return (
    <div>
      {
        props.favorites && props.favorites.map((favorite, index) => (
          <div key={index}>
            <h4>{favorite.name}</h4>
            <h5>{favorite.country}</h5>
            <button onClick={() => props.removeFavorite(index)}>Remove Favorite</button>
          </div>
        ))
      }
    </div>
  )
}