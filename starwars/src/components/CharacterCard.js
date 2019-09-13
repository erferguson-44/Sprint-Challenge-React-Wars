import React from "react";
import styled from "styled-components";

const DivCharacter = styled.div`
  transition: transform 0.2s ease-in;
  border:1px solid black;
  color: black;
  width: 200px;
  max-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  cursor: pointer;
  box-shadow: 0px 1px 6px -2px grey;

  &:hover {
    transform: translateY(-5px) scale(1.05);
  }
`;

const CharIMage = styled.img`
    width: 200px;
    height: 200px;
    object-fit: scale;
    flex-shrink: 2;
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