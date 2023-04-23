import { AbBotao, AbGrupoOpcao, AbGrupoOpcoes, AbInputQuantidade } from "ds-alurabooks";
import { useState } from "react";
import { useParams } from "react-router-dom";
import TituloPrincipal from "../../componentes/TituloPrincipal";
import { formatador } from "../../utils/formatador-moeda";
import "./Livro.css";
import { useLivro } from "../../graphQL/livros/hooks";


const Livro = () => {
    const params = useParams();

    const [opcao, setOpcao] = useState<AbGrupoOpcao>();
    const [quantidade, setQuantidade] = useState(0);

    const { data } = useLivro(params.slug || "");

    const opcoes: AbGrupoOpcao[] = data?.livro.opcoesCompra
        ? data?.livro.opcoesCompra.map((opcao) => ({
              id: opcao.id,
              corpo: formatador.format(opcao.preco),
              titulo: opcao.titulo,
              rodape: opcao.formatos ? opcao.formatos.join(",") : "",
          }))
        : [];

    return (
        <section className="livro-detalhe">
            <TituloPrincipal texto="Detalhes do Livro" />
            <div className="">
                <div className="container">
                    <figure>
                        <img src={data?.livro.imagemCapa} alt={data?.livro.descricao} />
                    </figure>
                    <div className="detalhes">
                        <h2>{data?.livro.titulo}</h2>
                        <p>{data?.livro.descricao}</p>
                        <h3>Selecione o formato do seu livro:</h3>
                        <div className="opcoes">
                            <AbGrupoOpcoes opcoes={opcoes} onChange={setOpcao} valorPadrao={opcao} />
                        </div>
                        <p>
                            <strong>*Você terá acesso às futuras atualizações do livro.</strong>
                        </p>
                        <footer>
                            <div className="qtdContainer">
                                <AbInputQuantidade onChange={setQuantidade} />
                            </div>
                            <div>
                                <AbBotao texto="Comprar" />
                            </div>
                        </footer>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Livro;
