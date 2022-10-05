import styled from "styled-components"
import Filmes from "./filmes"

export default function TelaSelecionarFilme() {
    return(
        <>
            <SelecioneHorario>
                <h1>Selecione o Filme</h1>
            </SelecioneHorario>
            
            <Filmes />
        </>
    )
}

const SelecioneHorario = styled.div`
    width: 100%;
    margin-top: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    && h1 {
        font-weight: 100;
    }
`