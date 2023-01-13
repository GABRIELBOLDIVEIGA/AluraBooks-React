import perfil from "../../img/perfil.svg";
import sacola from "../../img/sacola.svg";
import styled from "styled-components";

const IconesContainer = styled.ul`
    display: flex;
    align-items: center;
`;

const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
`;

const icones = [perfil, sacola];
export default function IconesHeader() {
    return (
        <IconesContainer>
            {icones.map((icone) => (
                <Icone>
                    <img src={icone} alt="icones"></img>
                </Icone>
            ))}
        </IconesContainer>
    );
}
