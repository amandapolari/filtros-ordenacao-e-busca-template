import React from 'react';
import { Container } from './styles';

const Header = ({
    searchId,
    setSearchId,
    searchName,
    setSearchName,
    sortSearch,
    setSortSearch,
    searchByType,
    setSearchByType,
}) => {
    // Testando se o input está controlado
    // console.log(searchId);
    // console.log(searchName);
    // console.log(sortSearch);
    // console.log(searchByType);

    const pokemontypesArray = [
        'Normal',
        'Fire',
        'Water',
        'Grass',
        'Flying',
        'Fighting',
        'Poison',
        'Electric',
        'Ground',
        'Rock',
        'Psychic',
        'Ice',
        'Bug',
        'Ghost',
        'Steel',
        'Dragon',
        'Dark',
        'Fairy',
    ];

    return (
        <Container>
            <input
                type="number"
                placeholder="Buscar por id"
                value={searchId}
                onChange={(event) => setSearchId(event.target.value)}
            />
            <input
                type="text"
                placeholder="Buscar por nome"
                value={searchName}
                onChange={(event) => setSearchName(event.target.value)}
            />
            <select
                value={sortSearch}
                onChange={(event) => setSortSearch(event.target.value)}
            >
                <option>Ordenar</option>
                <option>Crescente</option>
                <option>Decrescente</option>
            </select>
            <select
                name="tipo"
                id="tipo"
                value={searchByType}
                onChange={(event) => {
                    setSearchByType(event.target.value);
                }}
            >
                <option>Selecione um tipo</option>
                {pokemontypesArray.map((type) => {
                    return (
                        <option key={type} value={type}>
                            {type}
                        </option>
                    );
                })}
            </select>
        </Container>
    );
};

export default Header;
