import styled from "styled-components";

const OpcoesContainer = styled.ul`
    display: flex;
`;

const Opcoes = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`;

const textoOpcoes = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];

export default function OpcoesHeader() {
    return (
        <OpcoesContainer>
            {textoOpcoes.map((texto) => (
                <Opcoes>
                    <p>{texto}</p>
                </Opcoes>
            ))}
        </OpcoesContainer>
    );
}
