import { Link, useParams } from "react-router-dom";
import styled from "styled-components"

export default function Horarios({ days, setHorarioSelecionado}) {
    const {idFilme} = useParams()

    return (
        <Horario>
            <p>{days.weekday} {days.date}</p>
            <Hora>
                {days.showtimes.map((t) => 
                <Link key={t.id} style={{textDecoration: "none"}} to={`/assentos/${idFilme}`} onClick={() => setHorarioSelecionado([ days.weekday, days.date, t.name ])}>
                    <CaixaHora>
                        <p>{t.name}</p>
                    </CaixaHora>
                </Link> 
                )}
            </Hora>
        </Horario>
        
    )
}

const Horario = styled.div`
    margin: 10px;
`

const Hora = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const CaixaHora = styled.button`
    width: 80px;
    height: 40px;
    background-color: #E8833A;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    border-radius: 3px;
    border: none;
    margin-bottom: 10px;
    &&:active {
        transform: translateY(2px);
    }
`