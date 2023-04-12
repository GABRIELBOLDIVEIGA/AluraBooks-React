import { AbBotao } from "ds-alurabooks";
import { useEffect, useState } from "react";
import { IPedido } from "../../interfaces/IPedido";
import http from "../../http";
import "./Pedidos.css";

export default function Pedidos() {
    const [pedidos, setPedidos] = useState<IPedido[]>([]);

    const formatador = (valor: number) => {
        return Intl.NumberFormat("pt-br", { style: "currency", currency: "BRL" }).format(valor);
    };

    useEffect(() => {
        http.get<IPedido[]>("pedidos", {})
            .then((respota) => {
                // console.log(respota.data);
                setPedidos(respota.data);
            })
            .catch((error) => {
                console.log(error);
                alert("Algo de errado não esta certo...");
            });
    }, []);

    return (
        <section className="pedidos">
            <h1>Meus pedidos</h1>

            {pedidos.map((pedido) => {
                return (
                    <div key={pedido.id} className="pedido">
                        <ul>
                            <li>
                                Pedido: <strong>{pedido.id}</strong>
                            </li>
                            <li>
                                Data do pedido: <strong>{new Date(pedido.data).toLocaleDateString()}</strong>
                            </li>
                            <li>
                                Valor total: <strong>{formatador(pedido.total)}</strong>
                            </li>
                            <li>
                                Entrega realizada em: <strong>{new Date(pedido.entrega).toLocaleDateString()}</strong>
                            </li>
                        </ul>
                        <AbBotao texto="Detalhes" />
                    </div>
                );
            })}
        </section>
    );
}
