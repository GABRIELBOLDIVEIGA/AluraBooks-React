import "./ListaLivros.css";
import CardLivro from "../CardLivro";
import { ICategoria } from "../../interfaces/ICategoria";
import { AbBotao, AbCampoTexto } from "ds-alurabooks";
import { useState } from "react";
import { useLivros } from "../../graphQL/livros/hooks";

interface ListaLivrosProps {
    categoria: ICategoria;
}

const ListaLivros = ({ categoria }: ListaLivrosProps) => {
    const { data, refetch } = useLivros(categoria);

    const [textoBusca, setTextoBusca] = useState("");

    const buscarLivros = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (textoBusca) {
            refetch({
                categoriaId: categoria.id,
                titulo: textoBusca,
            });
        }
    };

    return (
        <section>
            <form onSubmit={buscarLivros} style={{ maxWidth: "80%", margin: "0 auto", textAlign: "center" }}>
                <AbCampoTexto value={textoBusca} onChange={setTextoBusca} placeholder="Digite o titulo..." />
                <div style={{ marginTop: "16px" }}>
                    <AbBotao texto="Bucar" />
                </div>
            </form>
            <div className="livros">
                {data?.livros.map((livro) => (
                    <CardLivro livro={livro} key={livro.id} />
                ))}
            </div>
        </section>
    );
};

export default ListaLivros;
