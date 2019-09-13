import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components"

import { CharacterCard } from './CharacterCard';

export default function CharacterGrid(){
    const [characters, setCharacters] = useState([]);
    // const [faction, setFaction] = useState(''

    useEffect(() => {
        axios
        .get(`https://swapi.co/api/people/`)

        .then(response => {
            const characters = response.data.results;
            console.log(characters);
            setCharacters(characters);
        })

        .catch(error => {
            console.log("The Force is not with You.", error);
        });
    },[]);

    return(
        <div className="container">
            {characters.map(character => {
            return ( <CharacterCard 
                name={character.name}
                height={character.height}
                hair_color={character.hair_color}
                skin_color={character.skin_color}/>
                );;
            })}
        </div>
    )
};