import styled from "styled-components"

export default function Acentos() {
    return(
        <>
            <BolinhasAcentos>
                <Container>
                    <BolinhaAcento color={"#7B8B99"}/>
                    <BolinhaAcento color={"#7B8B99"}/>
                    <BolinhaAcento color={"#7B8B99"}/>
                    <BolinhaAcento color={"#7B8B99"}/>
                    <BolinhaAcento color={"#7B8B99"}/>
                    <BolinhaAcento color={"#7B8B99"}/>
                    <BolinhaAcento color={"#7B8B99"}/>
                    <BolinhaAcento color={"#7B8B99"}/>
                    <BolinhaAcento color={"#7B8B99"}/>
                    <BolinhaAcento color={"#7B8B99"}/>
                    <BolinhaAcento color={"#7B8B99"}/>
                    <BolinhaAcento color={"#7B8B99"}/>
                    <BolinhaAcento color={"#7B8B99"}/>
                    <BolinhaAcento color={"#7B8B99"}/>
                    <BolinhaAcento color={"#7B8B99"}/>
                    <BolinhaAcento color={"#7B8B99"}/>
                    <BolinhaAcento color={"#7B8B99"}/>
                    <BolinhaAcento color={"#7B8B99"}/>
                    <BolinhaAcento color={"#7B8B99"}/>
                    <BolinhaAcento color={"#7B8B99"}/>
                    <BolinhaAcento color={"#7B8B99"}/>
                    <BolinhaAcento color={"#7B8B99"}/>
                    <BolinhaAcento color={"#7B8B99"}/>
                    <BolinhaAcento color={"#7B8B99"}/>
                    <BolinhaAcento color={"#7B8B99"}/>
                    <BolinhaAcento color={"#7B8B99"}/>
                    <BolinhaAcento color={"#7B8B99"}/>
                    <BolinhaAcento color={"#7B8B99"}/>
                    <BolinhaAcento color={"#7B8B99"}/>
                    <BolinhaAcento color={"#7B8B99"}/>
                    <BolinhaAcento color={"#7B8B99"}/>
                    <BolinhaAcento color={"#7B8B99"}/>
                    <BolinhaAcento color={"#7B8B99"}/>
                    <BolinhaAcento color={"#7B8B99"}/>
                    <BolinhaAcento color={"#7B8B99"}/>
                    <BolinhaAcento color={"#7B8B99"}/>
                    <BolinhaAcento color={"#7B8B99"}/>
                    <BolinhaAcento color={"#7B8B99"}/>
                    <BolinhaAcento color={"#7B8B99"}/>
                    <BolinhaAcento color={"#7B8B99"}/>
                    <BolinhaAcento color={"#7B8B99"}/>
                    <BolinhaAcento color={"#7B8B99"}/>
                    <BolinhaAcento color={"#7B8B99"}/>
                    <BolinhaAcento color={"#7B8B99"}/>
                    <BolinhaAcento color={"#7B8B99"}/>
                    <BolinhaAcento color={"#7B8B99"}/>
                    <BolinhaAcento color={"#7B8B99"}/>
                    <BolinhaAcento color={"#7B8B99"}/>
                    <BolinhaAcento color={"#7B8B99"}/>
                    <BolinhaAcento color={"#7B8B99"}/>
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
                <input type="text" placeholder="Digite seu nome..."/>
                <h3>CPF do comprador:</h3>
                <input type="text" placeholder="Digite seu CPF..."/>
            </Inputs>

            <Input type="submit">
            <p>Reservar assento(s)</p>
            </Input>
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
        transform: translatey(1px);
    }
`