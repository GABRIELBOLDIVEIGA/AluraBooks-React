import { gql, useQuery } from "@apollo/client";
import { ICategoria } from "../../interfaces/ICategoria";
// import { useQuery } from '@tanstack/react-query'
// import { obterProdutosDaCategoria } from "../../http"
import CardLivro from "../CardLivro";

import "./ListaLivros.css";
import { ILivro } from "../../interfaces/ILivro";

interface ListaLivrosProps {
    categoria: ICategoria;
}

const OBTER_LIVROS = gql`
query ObterLivros($categoriaId: Int) {
    livros(categoriaId: $categoriaId) {
      id
      slug
      titulo
      imagemCapa
      opcoesCompra {
        id
        preco
      }
    }
  }
`;

const ListaLivros = ({ categoria }: ListaLivrosProps) => {
    // const { data: produtos } = useQuery(['buscaLivrosPorCategoria', categoria], () => obterProdutosDaCategoria(categoria))
    const { data } = useQuery<{ livros: ILivro[] }>(OBTER_LIVROS, {
        variables: {
            categoriaId: categoria.id
        }
    });

    return (
        // <section className="livros">
        //     {produtos?.map((livro) => (
        //         <CardLivro livro={livro} key={livro.id} />
        //     ))}
        // </section>

        <section className="livros">
            {data?.livros.map((livro) => (
                <CardLivro livro={livro} key={livro.id} />
            ))}
        </section>
    );
};

export default ListaLivros;
