import React from 'react';
import ErrorPokemon from '../img/error.gif';
import LoadingPokemon from '../img/loading.gif'
import '../styles/general.css';
import '../styles/pokedexScreen.css';
import Stat from './Stat';

function PokedexScreen({ pokemon, loading, error }) {
    if (error) {
        return (
            <div className='pokedex-screen'>
                <img
                    src={ErrorPokemon}
                    alt="Hubo un error buscando tu pokemon"
                    className='pokedex-no-screen'
                />
            </div>
        )
    }
    return (
        <div className='pokedex-screen'>
            {!pokemon || loading ?
                <img
                    src={LoadingPokemon}
                    alt="Aun no hay ningun pokemon"
                    className='pokedex-no-screen'
                /> :
                <div className='pokemon-info'>
                    <h2 className='pokemon-name'>{pokemon.name}</h2>
                    <img
                        className='pokemon-img'
                        src='{pokemon.sprites.front_default}'
                        alt='{pokemon.name}'
                    />
                    <ul className='pokemon-stats'>
                        {pokemon.stats.map(item => (
                            <Stat key={item.stat.name} item={item} />
                        )
                        )}
                    </ul>
                </div>
            }
        </div>
    )
}

export default PokedexScreen;