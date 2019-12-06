import React, { useState } from 'react'
import { useModal } from '../hooks/useModal'

export default function Favorites(props) {

  const [playerOfInterest, setPlayerOfInterest] = useState(-1)
  const [description, setDescription] = useState('')
  const [modal, setModal] = useState(false)

  let modalDisplay = modal ? 'display-block modal' : 'display-none modal'

  const toggleModal = ev => {
    setModal(!modal)
  }
  const loadModal = ev => {
    setPlayerOfInterest(ev.target.id)
    setModal(!modal)
  }
  const handleDescription = ev => {
    setDescription(ev.target.value)
  }
  const handleSubmit = ev => {
    ev.preventDefault()
    props.describeFavorite(description, playerOfInterest)
  }

  return (
    <div>

      <div className={modalDisplay}>
        <div className="modal-main">
          <form onSubmit={handleSubmit}>
            <input 
              placeholder="Description"  
              onChange={handleDescription}
              value={description}
            />
            <button>Edit</button>
          </form>
          {
            playerOfInterest.description && 
            <p>{props.favorites[playerOfInterest].description}</p>
          }
          <button onClick={toggleModal}>Close Modal</button>
        </div>
      </div>

      {
        props.favorites && props.favorites.map((favorite, index) => (
          <div key={index}>
            <h4>{favorite.name}</h4>
            <h5>{favorite.country}</h5>
            {
              favorite.description && <p>{favorite.description}</p>
            }
            <button id={index} onClick={loadModal}>Edit Description</button>
            <button onClick={() => props.removeFavorite(index)}>Remove Favorite</button>
          </div>
        ))
      }

    </div>
  )
}