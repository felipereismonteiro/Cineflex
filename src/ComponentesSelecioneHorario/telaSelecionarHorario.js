import Header from "../ComponentesPrincipais/header"
import Horarios from "./horarios"
import Footer from "./footerImg"


export default function TelaSelecionarHorario() {
    return (
        <>
            <Header screen={"Horario"}/>
            <Horarios />
            <Footer />
        </>
    )
}