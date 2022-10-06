import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import Footer from "../ComponentesPrincipais/footer"
import Acentos from "./acentos"

export default function TelaSelecionarAcento({ setAcentoSelecionado, setDados, filmeSelecionado, horarioSelecionado, acentoSelecionado, dados }) {
    const [filme, setFilme] = useState()
    const {idFilme} = useParams()
    const [acentos, setAcentos] = useState([])

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idFilme}/seats`).then((res) =>{
            setAcentos(res.data)
        }).catch((err) => {
            console.log(err.responde.data)
        })
    }, [idFilme])

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`).then((res) => {
            setFilme(res.data)
        }).catch((err) => {
            console.log(err.response.data)
        })
    }, [idFilme])

    if(filme === undefined || acentos === undefined) {
        return(
            <Loading>
                <img src="http://pa1.narvii.com/6531/f134666e4eb7631e58750806ec29afc2cf9c9e0e_00.gif" alt="" />
            </Loading>
        )
    }

    
    return(
        <>
            <SelecioneAcento>
                <h1>Selecione o(s) assento(s)</h1>
            </SelecioneAcento>
            <Acentos    acentos={acentos.seats} 
                        setAcentoSelecionado={setAcentoSelecionado} 
                        setDados={setDados}
                        filmeSelecionado={filmeSelecionado} 
                        horarioSelecionado={horarioSelecionado}
                        acentoSelecionado={acentoSelecionado}
                        dados={dados} />

            <Footer filme={filme}/>
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
const Loading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 200px;
`  