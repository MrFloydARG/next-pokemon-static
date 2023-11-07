import type { NextPage, GetStaticProps } from 'next';
import { Grid } from '@nextui-org/react';

import { pokeApi } from '../api';

import { PokemonListResponse, SmallPokemon } from '../interfaces/pokemon-list';

import { Layout } from '../components/layouts';
import { PokemonCard } from '../components/pokemon';

interface Props {
  pokemons: SmallPokemon[];
}

const Home: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title='Listado de Pokemos'>
      <Grid.Container gap={2} justify='flex-start'>
        {pokemons.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

// solo se puede usar en las paginas, no en los componentes
// se ejecuta del lado del servidor
export const getStaticProps: GetStaticProps = async ctx => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`,
    // img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i + 1}.png`
  }));

  return {
    props: {
      pokemons: pokemons,
    },
  };
};

export default Home;
