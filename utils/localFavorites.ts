const toogleFavorite = (id: number) => {
  let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

  if (favorites.includes(id)) {
    favorites = favorites.filter(pokeId => pokeId !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
};

const existInFavorites = (id: number): Boolean => {
  // Si no es un navegador, devuelve false. Esto es para evitar errores en el servidor.
  // Esto es para evitar errores en el servidor. El servidor no tiene acceso a localStorage.)
  if (typeof window === 'undefined') return false;

  const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

  return favorites.includes(id);
};

const pokemons = (): number[] => {
  return JSON.parse(localStorage.getItem('favorites') || '[]');
};

export default { existInFavorites, pokemons, toogleFavorite };
