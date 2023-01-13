import { livros } from "./dadosUltimosLancamentos.js";
import { Titulo } from "../Titulo/index.js";
import CardRecomenda from "../CardRecomenda/index.js";
import imgLivro from "../../img/livro2.png"
import styled from "styled-components";

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

export default function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo 
                cor="#000" 
                tamanhoFonte="36px" 
                alinhamento="center"
            >   
                ÚLTIMOS LANÇAMENTOS
            </Titulo>
            <NovosLivrosContainer>
                {livros.map((livro) => (
                    <img src={livro.src}></img>
                ))}    
            </NovosLivrosContainer>
            <CardRecomenda 
                titulo={"Talvez voce se enteresse por..."}
                subTitulo={"Angular 11"}
                descricao={"Construindo uma aplaicação integrada com a plataforma google"}
                img={imgLivro}
            />
        </UltimosLancamentosContainer>
    );
}
