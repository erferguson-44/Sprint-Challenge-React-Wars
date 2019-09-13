import React from "react";
import styled from "styled-components";

const DivCharacter = styled.div`
  transition: transform 0.2s ease-in;
  border:1px dashed yellow;
  color: black;
  width: 600px;
  max-height: 600px;
  margin: 10px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-evenly;
//   margin-bottom: 10px;
  cursor: pointer;
  box-shadow: 0px 1px 6px -2px grey;

  &:hover {
    transform: translateY(-5px) scale(1.05);
    background:gold;
    color:black;
    border:1px dashed black;
  }
`;

export const CharacterCard = props => {
    
    return(
    <DivCharacter>
        <h2>{props.name}</h2>
        <p>Height:{props.height}</p>
        <p>Hair Color {props.hair_color}</p>
        <p>Skin Color:{props.skin_color}</p>
    </DivCharacter>    
    );
};