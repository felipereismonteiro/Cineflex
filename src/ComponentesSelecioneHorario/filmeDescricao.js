import styled from "styled-components"

export default function FilmeDescricao({filmeTitulo, filmeHorario}) {
    console.log(filmeHorario)
    return (
        <Descricao>
            <p>{filmeTitulo}</p>
            {filmeHorario !== undefined && <Horario>{filmeHorario}</Horario>}
        </Descricao>
    )
}

const Descricao = styled.div`
    font-size: 15px;
`

const Horario = styled.p`
    margin-top: -20px;
`