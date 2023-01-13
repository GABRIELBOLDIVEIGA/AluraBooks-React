import Header from "./componentes/Header/index.js";
import Pesquisa from "./componentes/Pesquisa/index.js";
import UltimosLancamentos from "./componentes/UltimosLancamentos/index.js"
import styled from "styled-components";

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002f52 35%, #326589);
`;

export default function App() {
    return (
        <AppContainer>
            <Header />
            <Pesquisa />
            <UltimosLancamentos />
        </AppContainer>
    );
}
