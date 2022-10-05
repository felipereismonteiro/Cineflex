import Horarios from "./horarios"
import Footer from "./footerImg"
import styled from "styled-components"

export default function TelaSelecionarHorario() {
    return (
        <>
            <SelecioneHorario>
                <h1>Selecione o horário</h1>
            </SelecioneHorario>
            <Horarios />
            <Footer />
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