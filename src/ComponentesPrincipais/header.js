import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Header() {
    return (
        <>
            <Topo>
                <Link style={{textDecoration: 'none'}} to="/">
                    <h1>CINEFLIX</h1>
                </Link>
            </Topo>
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
    text-decoration: none;
    && h1{
        color: #E8833A;
        font-size: 34px;
    }
`