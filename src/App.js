/* eslint-disable array-callback-return */
import styled, { createGlobalStyle } from 'styled-components';
import pokemons from './pokemon/pokemon.json';
import PokemonCard from './components/PokemonCard/PokemonCard';
import { getColors } from './utils/ReturnCardColor';
import Header from './components/Header/Header.js';
import { useState } from 'react';
const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  
  }
`;
const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(440px, 1fr));
    justify-items: center;
`;
function App() {
    const [searchId, setSearchId] = useState('');
    const [searchName, setSearchName] = useState('');
    const [sortSearch, setSortSearch] = useState('');
    const [searchByType, setSearchByType] = useState('');

    return (
        <>
            <GlobalStyle />
            <Header
                searchId={searchId}
                setSearchId={setSearchId}
                searchName={searchName}
                setSearchName={setSearchName}
                sortSearch={sortSearch}
                setSortSearch={setSortSearch}
                searchByType={searchByType}
                setSearchByType={setSearchByType}
            />
            <CardsContainer>
                {pokemons
                    .filter((pokemon) => {
                        if (pokemon.id.includes(searchId)) {
                            return pokemon;
                        } else if (!searchId) {
                            return pokemons;
                        }
                    })
                    .filter((pokemon) => {
                        if (
                            pokemon.name.english
                                .toLowerCase()
                                .includes(searchName.toLowerCase())
                        ) {
                            return pokemon;
                        } else if (!searchName) {
                            return pokemons;
                        }
                    })
                    // aqui
                    .filter((pokemon) => {
                        if (pokemon.type.includes(searchByType)) {
                            return pokemon;
                        } else if (
                            !searchByType ||
                            searchByType === 'Selecione um tipo'
                        ) {
                            return pokemons;
                        }
                    })
                    .sort((a, b) => {
                        if (sortSearch === 'Crescente') {
                            if (a.name.english < b.name.english) {
                                return -1;
                            }
                            if (a.name.english > b.name.english) {
                                return 1;
                            }
                            return 0;
                        } else if (sortSearch === 'Decrescente') {
                            if (a.name.english < b.name.english) {
                                return 1;
                            }
                            if (a.name.english > b.name.english) {
                                return -1;
                            }
                            return 0;
                        }
                    })
                    .map((pokemon) => {
                        return (
                            <PokemonCard
                                cardColor={getColors(pokemon.type[0])}
                                key={pokemon.id}
                                pokemon={pokemon}
                            />
                        );
                    })}
            </CardsContainer>
        </>
    );
}

export default App;
