import styled from "styled-components"
import Footer from "../ComponenteSelecioneAcento/footerAcento"
import Acentos from "./acentos"

export default function TelaSelecionarAcento() {
    return(
        <>
            <SelecioneAcento>
                <h1>Selecione o(s) assento(s)</h1>
            </SelecioneAcento>
            <Acentos/>
            <Footer />
        </>
    )
}

const SelecioneAcento = styled.div`
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

