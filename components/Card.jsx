import Image from "next/image";
import styled from "styled-components"

export const Card = ({ pokemonName, allPokemonImages, pokemonMoves }) => {
    console.log(pokemonMoves)
    return (
        <>
            
            <StyledOneCard>
            <p>{pokemonName}</p>
            <Image src={allPokemonImages} width={100} height={100} alt="" />
            </StyledOneCard>
    </>
    )
}

const StyledOneCard = styled.section`
border: 1px solid red;
background-color: red;
color: yellow;
margin: 5px auto;
border-radius: 10px;
`

