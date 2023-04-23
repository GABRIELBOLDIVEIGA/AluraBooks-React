import "./ListaLivros.css";
import CardLivro from "../CardLivro";
import { ICategoria } from "../../interfaces/ICategoria";
import { AbBotao, AbCampoTexto } from "ds-alurabooks";
import { useEffect, useState } from "react";
import { useLivros } from "../../graphQL/livros/hooks";
import { filtroDeLivrosVar, livrosVar } from "../../graphQL/livros/state";
import { useReactiveVar } from "@apollo/client";

interface ListaLivrosProps {
    categoria: ICategoria;
}

const ListaLivros = ({ categoria }: ListaLivrosProps) => {
    const [textoBusca, setTextoBusca] = useState("");

    useEffect(() => {
        filtroDeLivrosVar({
            ...filtroDeLivrosVar(),
            titulo: textoBusca.length >= 3 ? textoBusca : "",
        });

        if(textoBusca.length >= 3) {
            console.log("definir o titulo")
        }

    },[textoBusca])

    filtroDeLivrosVar({
        ...filtroDeLivrosVar(),
        categoria: categoria,
    });

    const livros = useReactiveVar(livrosVar);

    useLivros();

    return (
        <section>
            <form style={{ maxWidth: "80%", margin: "0 auto", textAlign: "center" }}>
                <AbCampoTexto value={textoBusca} onChange={setTextoBusca} placeholder="Digite o titulo..." />
                <div style={{ marginTop: "16px" }}>
                    <AbBotao texto="Bucar" />
                </div>
            </form>
            <div className="livros">
                {livros.map((livro) => (
                    <CardLivro livro={livro} key={livro.id} />
                ))}
            </div>
        </section>
    );
};

export default ListaLivros;
