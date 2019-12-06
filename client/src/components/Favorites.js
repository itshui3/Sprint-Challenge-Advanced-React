import React from 'react'
import { useModal } from '../hooks/useModal'

export default function Favorites(props) {

  return (
    <div>
      {
        props.favorites && props.favorites.map((favorite, index) => (
          <div key={index}>
            <h4>{favorite.name}</h4>
            <h5>{favorite.country}</h5>
            {
              favorite.description && <p>{favorite.description}</p>
            }

            <button onClick={() => props.removeFavorite(index)}>Remove Favorite</button>
          </div>
        ))
      }
    </div>
  )
}