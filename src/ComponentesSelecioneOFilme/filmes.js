import styled from "styled-components"
import Card from "../ComponentesPrincipais/filmeCardPrincipal"

export default function Filme() {
    return(
        <>
            <NavFilmes>
                <Card />
                <Card />
                <Card />
                <Card />
            </NavFilmes>
        </>
    )
}

const NavFilmes = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

const FilmeCard = styled.div`
    width: 145px;
    height: 209px;
    margin: 10px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    && img {
        width: 129px;
        height: 193px;
    }
`