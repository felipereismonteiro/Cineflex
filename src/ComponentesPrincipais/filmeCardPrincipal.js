import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Card({id ,title, poster}) {

    return (
        <CardFilme>
            <Link to={`/sessoes/${id}`}>
                <img src={poster} alt={title} />
            </Link>
        </CardFilme>
    )
}

const CardFilme = styled.div`
    width: 145px;
    height: 209px;
    margin: 10px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF;
    && img {
        width: 129px;
        height: 193px;
    }
`
