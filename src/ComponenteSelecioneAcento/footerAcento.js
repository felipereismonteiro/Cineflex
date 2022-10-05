import styled from "styled-components"
import Card from "../ComponentesPrincipais/filmeCard"
import FilmeDescricao from "./footerDescricao"


export default function FooterAcentos() {
    return(
        <>
        <FooterDiv></FooterDiv>    
            <FooterImg>
                <Card/>
                <FilmeDescricao />
            </FooterImg>
        </>
    )
}

const FooterDiv = styled.div`
    width: 100%;
    height: 117px;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    color: black;
    && p{
        font-weight: 500;
        font-size: 26px;
        font-family: 'Roboto';  
    }
`

const FooterImg = styled.div`
    width: 100%;
    height: 117px;
    background-color: #DFE6ED;
    position: fixed;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
    color: black;
    && p{
        font-weight: 500;
        font-size: 26px;
        font-family: 'Roboto';  
    }
`

