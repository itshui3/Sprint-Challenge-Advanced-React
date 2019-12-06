import { useState } from 'react'

export const useModal = initialState => {
  const [modal, setModal] = useState(initialState)

  const setModalState = ev => {
    setModal(!modal)
  }

  return [modal, setModalState]
}