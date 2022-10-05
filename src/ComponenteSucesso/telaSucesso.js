import { Link } from "react-router-dom"
import styled from "styled-components"



export default function TelaSucesso() {
    return(
        <>
            <Sucesso>
                <h1>Pedido feito <br /> com sucesso!</h1>
            </Sucesso>

            <Container>
                <h2>Filme e sessão</h2>
                <p>Coringa</p>
                <p>24/06/2021 15:00</p>
            </Container>

            <Container>
                <h2>Ingressos</h2>
                <p>Assento 17</p>
                <p>Assento 18</p>
            </Container>

            <Container>
                <h2>Comprador</h2>
                <p>Nome: Felipe dos Reis Monteiro</p>
                <p>CPF: 113.029.818.38</p>
            </Container>

            <Link to="/" style={{textDecoration: "none"}}>
                <Input type="submit">
                    <p>Voltar para home</p>
                </Input>
            </Link>
        </>
    )
}

const Container = styled.div`
    line-height: 5px;
    margin: 50px 10px;
    font-size: 18px;
    
`

const Sucesso = styled.div`
    width: 100%;
    margin-top: 80px;
    margin-bottom: -20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    && h1 {
        font-weight: bold;
        color: #247A6B; 
    }
`

const Input = styled.button`
    width: 225px;
    height: 42px;
    left: 72px;
    top: 688px;

    background: #E8833A;
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
        transform: translatey(3px);
    }
`