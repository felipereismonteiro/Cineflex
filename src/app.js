import TelaSelecionarFilme from "./ComponentesSelecioneOFilme/telaSelecionarFIlme"
import TelaSelecionarHorario from "./ComponentesSelecioneHorario/telaSelecionarHorario"
import TelaSelecionarAcento from "./ComponenteSelecioneAcento/TelaSelecionarAcento"
import TelaSucesso from "./ComponenteSucesso/telaSucesso"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./ComponentesPrincipais/header"



export default function App() {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<TelaSelecionarFilme />} />
                <Route path="/horarios" element={<TelaSelecionarHorario />} />
                <Route path="/acentos" element={<TelaSelecionarAcento />}/>
                <Route path="/sucesso" element={<TelaSucesso />}/>
            </Routes>
        </BrowserRouter>
    )
}

