import styled from "styled-components"
import Footer from "../ComponenteSelecioneAcento/footerAcento"
import Acentos from "./acentos"

export default function TelaSelecionarAcento() {
    return(
        <>
            <SelecioneHorario>
                <h1>Selecione o(s) assento(s)</h1>
            </SelecioneHorario>
            <Acentos/>
            <Footer />
        </>
    )
}

const SelecioneHorario = styled.div`
    width: 100%;
    margin-top: 80px;
    margin-bottom: -20px;
    display: flex;
    justify-content: center;
    align-items: center;
    && h1 {
        font-weight: 100;
    }
`