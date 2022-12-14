import styled from "styled-components"

export default function Card({filmeTitulo, filmePoster}) {
    return (
        <CardFilme>
            <img src={filmePoster} alt={filmeTitulo} />
        </CardFilme>
    )
}

const CardFilme = styled.div`
    width: 64px;
    height: 89px;
    margin: 10px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
    && img {
        width: 48px;
        height: 72px;
    }
`
