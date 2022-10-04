import ReactDOM from "react-dom"
import App from "./app"

function index() {
    return <App/>
}

ReactDOM.render(index(), document.querySelector(".root"))