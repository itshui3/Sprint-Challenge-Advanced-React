import { useState } from 'react'

export const useButtonToggle = initialState => {
  const [buttonState, setButtonState] = useState(initialState)

  const setButton = buttonType => {
    if(buttonType === 'faves') {
      setButtonState({ ...buttonState, faves: !buttonState.faves})
    } else if (buttonType === 'players') {
      setButtonState({ ...buttonState, players: !buttonState.players })
    }
  }

  return [buttonState, setButton]
}