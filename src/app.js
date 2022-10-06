import TelaSelecionarFilme from "./ComponentesSelecioneOFilme/telaSelecionarFIlme"
import TelaSelecionarHorario from "./ComponentesSelecioneHorario/telaSelecionarHorario"
import TelaSelecionarAcento from "./ComponenteSelecioneAcento/TelaSelecionarAcento"
import TelaSucesso from "./ComponenteSucesso/telaSucesso"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./ComponentesPrincipais/header"
import { useState } from "react"


export default function App() {
    const [filmeSelecionado, setFilmeSelecionado] = useState()
    const [horarioSelecionado, setHorarioSelecionado] = useState([])
    const [acentoSelecionado, setAcentoSelecionado] = useState([])  
    const [dados, setDados] = useState()

    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<TelaSelecionarFilme setFilmeSelecionado={setFilmeSelecionado} />} />
                <Route path="/sessoes/:idFilme" element={<TelaSelecionarHorario setHorarioSelecionado={setHorarioSelecionado}/>} />
                <Route path="/assentos/:idFilme" element={<TelaSelecionarAcento 
                                                                                setAcentoSelecionado={setAcentoSelecionado} 
                                                                                setDados={setDados}
                                                                                filmeSelecionado={filmeSelecionado} 
                                                                                horarioSelecionado={horarioSelecionado}
                                                                                acentoSelecionado={acentoSelecionado}
                                                                                dados={dados} />}/>
                <Route path="/sucesso" element={<TelaSucesso 
                                                            filmeSelecionado={filmeSelecionado} 
                                                            horarioSelecionado={horarioSelecionado}
                                                            acentoSelecionado={acentoSelecionado}
                                                            dados={dados}
                                                             />}/>
            </Routes>
        </BrowserRouter>
    )
}

