import Card from "../ComponentesPrincipais/filmeCardPrincipal"
import styled from "styled-components"

export default function Filmes() {
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

