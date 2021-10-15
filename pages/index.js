
import Link from "next/link"
import Image from "next/image"
import styled from "styled-components"
import { Card } from "../components/Card";
import Head from "next/head";


export default function Home( {details} ) {
  
  
  return (
    <>
      <Head>
        <title>Pokedex</title>
      </Head>
      <div>
        <h1>Welcome</h1>
        <Link href="./pokemon/caught">
          <a>go to caught</a>
        </Link>
        <StyleBackground>
          <StyledSpeechBubbel>Hello I am NewDeLi and I want to fetch them all!</StyledSpeechBubbel>
          <StyledImage
            src="/images/1630428974688-ash-ketchum-smiling-1165117-1280x0.jpeg"
            width={200}
            height={200}
            alt="picture of Ash"
          />
        </StyleBackground>
        <StyleArea>
          {details.map((pokemon) => (
            <Card
              key={pokemon.name}
              pokemonName={pokemon.name}
              allPokemonImages={pokemon.sprites.back_shiny}
            />
          ))}
        </StyleArea>
      </div>
    </>
  );
}

//Styling Components here
const StyledImage = styled(Image)`
border-radius: 50%;
`;
const StyledSpeechBubbel = styled.p`
  position: relative;
  bottom: 30px;
  background: #88b7d5;
  border: 4px solid #c2e1f5;
  border-radius: 10px;
  height: 50px;
  width: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:after,
  &:before {
    top: 100%;
    left: 50%;
    border: solid transparent;
    content: "";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }
  &:after {
    border-color: rgba(136, 183, 213, 0);
    border-top-color: #88b7d5;
    border-width: 30px;
    margin-left: -30px;
  }
  &:before {
    border-color: rgba(194, 225, 245, 0);
    border-top-color: #c2e1f5;
    border-width: 36px;
    border-radius: 10px;
    margin-left: -36px;
  }
`;
const StyleBackground = styled.div`
  background-image: url("./images/pokemon1.jpeg");
  height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`;
const StyleArea = styled.main`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

//fetch Data here
export async function getStaticProps() {
  // Get external data from the file system, API, DB, etc.
  const response = await fetch('https://pokeapi.co/api/v2/pokemon');
  const data = await response.json();
  const allPokemonData = data.results;

  const details = await Promise.all(allPokemonData.map(async(pokemon) => {
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
    const data = await result.json();
    return data
  }))
  getStaticProps();
  // The value of the `props` key will be
  //  passed to the `Home` component
  return {
    props: {details}
  }
}