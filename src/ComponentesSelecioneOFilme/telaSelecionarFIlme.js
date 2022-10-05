import styled from "styled-components"
import Filmes from "./filmes"

export default function TelaSelecionarFilme() {
    return(
        <>
            <SelecioneFilme>
                <h1>Selecione o filme</h1>
            </SelecioneFilme>
            
            <Filmes />
        </>
    )
}

const SelecioneFilme = styled.div`
    width: 100%;
    margin-top: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    && h1 {
        font-weight: 100;
    }
`