import perfil from "../../img/perfil.svg";
import sacola from "../../img/sacola.svg";
import "./estilo.css"
const icones = [perfil, sacola];

export default function IconesHeader() {
    return (
        <ul className="icones">
            {icones.map((icone) => (
                <li className="icone">
                    <img src={icone} alt="icones"></img>
                </li>
            ))}
        </ul>
    );
}
