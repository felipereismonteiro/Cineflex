import styled from "styled-components"

export default function Header({screen}) {
    return (
        <>
            <Topo>
                <h1>CINEFLIX</h1>
            </Topo>
            <SelecioneHorario>
                <h1>Selecione o {screen}</h1>
            </SelecioneHorario>
        </>
    )
}

const Topo = styled.header`
    width: 100%;
    height: 67px;
    top: 0;
    right: 0;
    background-color: #C3CFD9;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    font-family: 'Roboto', sans-serif;
    && h1{
        color: #E8833A;
        font-size: 34px;
    }
`

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