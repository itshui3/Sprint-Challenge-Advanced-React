import { useLocalStorage } from './useLocalStorage'

export const useFavoritism = initialFavorites => {
  const [favorites, setFavorites] = useLocalStorage('favorites', initialFavorites)

  const setNewFavorite = player => {
    if (favorites.every(person => {
      return person.name !== player.name
    })) {
      setFavorites([...favorites, player])
    }
  }
  const removeFavorite = favoriteIndex => {
    setFavorites(favorites.slice(0, favoriteIndex).concat(favorites.slice(favoriteIndex + 1)))
  }

  return [favorites, setNewFavorite, removeFavorite]
}