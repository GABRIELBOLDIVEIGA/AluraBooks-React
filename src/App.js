import "./App.css";
import Logo from "./componentes/index.js";
import perfil from "./img/perfil.svg";
import sacola from "./img/sacola.svg";

const textoOpcoes = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];
const icones = [perfil, sacola];

export default function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Logo></Logo>
                <ul className="opcoes">
                    {textoOpcoes.map((texto) => (
                        <li className="opcao">
                            <p>{texto}</p>
                        </li>
                    ))}
                </ul>
                <ul className="icones">
                    {icones.map((icone) => (
                        <li className="icone">
                            <img src={icone} alt="icones"></img>
                        </li>
                    ))}
                </ul>
            </header>
        </div>
    );
}
