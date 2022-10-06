import Card from "../ComponentesPrincipais/filmeCardPrincipal"
import styled from "styled-components"
import axios from "axios"
import { useState, useEffect } from "react"

export default function Filmes({ setFilmeSelecionado }) {
    const [filme, setFilme] = useState(undefined);
    useEffect(() => {

        axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies").then((res) => {
            setFilme(res.data)
        }).catch((err) =>{
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

    return(
        <>
            <NavFilmes>
                {filme.map((f) => <Card key={f.id} filme={f} id={f.id} title={f.title} poster={f.posterURL} setFilmeSelecionado={ setFilmeSelecionado } />)}                               
            </NavFilmes>
        </>
    )
}

const NavFilmes = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

const Loading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`   

