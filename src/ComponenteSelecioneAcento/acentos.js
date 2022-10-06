import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function Acentos({ acentos, setAcentoSelecionado, setDados, filmeSelecionado, horarioSelecionado, acentoSelecionado, dados }) {
    const [selecionados, setSelecionados] = useState([]) 
    const [Nome, setNome] = useState()
    const [CPF, setCPF] = useState()
    const navigate = useNavigate()
    
    setAcentoSelecionado(selecionados)
    
    function acento(a) {

        if(selecionados.includes(a.name) && a.isAvailable ) {
            return  <BolinhaAcento onClick={() => clicado(a.name)}key={a.id} color={"#0E7D71"}>
                        <p>{a.name}</p>
                    </BolinhaAcento>
        } 
        
        else if(a.isAvailable === true) {
            return  <BolinhaAcento onClick={() => setSelecionados([...selecionados, a.name])} key={a.id} color={"#7B8B99"}>
                        <p>{a.name}</p>
                    </BolinhaAcento>
        } else if(a.isAvailable === false) {
            return  <BolinhaAcento key={a.id} color={"#F7C52B"}>
                        <p>{a.name}</p>
                    </BolinhaAcento>
        }
    }

    function clicado(i) {
        const acentosFiltrados = selecionados.filter((item) => item !== i)
        setSelecionados(acentosFiltrados)
    }

    function inputName(e) {
        setNome(e.target.value)
    }

    function inputCPF(e) {
        setCPF(e.target.value)
    }

    function reservandoSessao() {
        const postForm = 
            {
                ids: acentoSelecionado,
                name: Nome,
                cpf: CPF
            }
        

        axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", postForm).then((res) => {
            navigate("../sucesso")
        }).catch((err) => {
            alert(err.response)
        })
    }

    function enviarSucesso() {
        if(acentoSelecionado.length !== 0 && (Nome !== undefined && Nome !== "") && (CPF !== undefined && CPF !== "")){
            return(
                <Input color={"#E8833A"} type="submit" onClick={() => {
                    setDados([Nome, CPF])
                    reservandoSessao()
                    }}>
                    <p>Reservar assento(s)</p>
                </Input>
                
            )
        } else {
            return(
                    <Input color={"gray"} type="submit">
                        <p>Reservar assento(s)</p>
                    </Input>
            )
        }
        
    }

    return(
        <>
            <BolinhasAcentos>
                <Container>
                    {acentos !== undefined && acentos.map((a) => acento(a))}
                </Container>
            </BolinhasAcentos>

            <BolinhasDemonstracao>
                <Bolinha color={"#0E7D71"}/>
                <Bolinha color={"#7B8B99"}/>
                <Bolinha color={"#F7C52B"}/>
            </BolinhasDemonstracao>
            <Descricao>
                <p>Selecionado</p>
                <p>Disponível</p>
                <p>Indisponível</p>
            </Descricao>

            <Inputs>
                <h3>Nome do comprador:</h3>
                <input onChange={(e) => inputName(e)} type="text" placeholder="Digite seu nome..."/>
                <h3>CPF do comprador:</h3>
                <input onChange={(e) => inputCPF(e)} type="text" placeholder="Digite seu CPF..."/>
            </Inputs>

            {enviarSucesso()}
            
        </>
    )

}

const BolinhasAcentos = styled.div`
    display: flex;
    justify-content: center;
`
const Container = styled.div`
    width: 95%;
    display: flex;
    justify-content: space-around   ;
    flex-wrap: wrap;
`
const BolinhaAcento = styled.button`
    height: 26px;
    width: 26px;
    border-radius: 12px;
    background-color:  ${(props) => props.color};
    border: 1px solid #7B8B99;
    margin: 20px 4px 0 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    &&:active {
        transform: translateY(2px);
    }
    
`

const Descricao = styled.div`
    display: flex;
    justify-content: space-around;
`

const BolinhasDemonstracao = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
`

const Bolinha = styled.button`
    height: 26px;
    width: 26px;
    border-radius: 12px;
    background-color:  ${(props) => props.color};
    border: 1px solid #7B8B99;

`

const Inputs = styled.div`
    margin-top: 20px;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    && h3{
        font-family: 'Roboto';
        font-size: 17px;
        margin: 3px;
        margin-top: 10px;
    }
    && input{
        width: 100%;
        height: 51px;
        border: 1px solid #D4D4D4;
        box-sizing: border-box;
        padding: 10px;
    }
    && input::placeholder {
        font-family: 'Roboto';
        font-style: italic;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        color: gray;
    }

`

const Input = styled.button`
    width: 225px;
    height: 42px;
    left: 72px;
    top: 688px;

    background: ${(props) => props.color};
    border-radius: 3px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 40px auto 25px auto;
    && p{

        font-family: 'Roboto';
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        

        color: #FFFFFF;
    }
    &&:active {
        transform: translatey(1px);
    }
`