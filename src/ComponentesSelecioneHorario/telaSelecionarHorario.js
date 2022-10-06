import Horarios from "./horarios"
import Footer from "./footerImg"
import styled from "styled-components"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"

export default function TelaSelecionarHorario() {
    const [filme, setFilme] = useState()
    const { idFilme } = useParams()

    useEffect(() => {
        axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`).then((res) => {
            setFilme(res.data)
        }).catch((err) => {
            console.log(err.response.data)
        })
    }, [])

    if(filme === undefined) {
        return(
            <Loading>
                <img src="http://pa1.narvii.com/6531/f134666e4eb7631e58750806ec29afc2cf9c9e0e_00.gif" alt="" />
            </Loading>
        )
    }

    return (
        <>
            <SelecioneHorario>
                <h1>Selecione o horário</h1>
            </SelecioneHorario>

            {filme.days.map((f) => <Horarios key={f.id} days={f}/>)}

            <Footer filme={filme} />
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

const Loading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 200px;
`   
