import styled from "styled-components"

export default function FilmeDescricao() {
    return (
        <Descricao>
            <p>Coringa</p>
            <p>Quinta-feira - 15:00</p>
        </Descricao>
    )
}

const Descricao = styled.div`
    line-height: 5px;
`