import React, {useState, useEffect} from "react";
import axios from "axios";

import CharacterCard from './CharacterCard';

export default function CharacterGrid(){
    const [characters, setCharacters] = useState([]);
    // const [faction, setFaction] = useState(''

    useEffect(() => {
        axios
        .get(`https://swapi.co/api/people/:id/`)

        .then(response => {
            const rw = response.data;
            console.log(rw);
            setCharacters(rw);
        })

        .catch(error => {
            console.log("The Force is not with You.", error);
        });
    },[]);

    return(

    );
}