import { useQuery } from "@apollo/client";
import { ICategoria } from "../../interfaces/ICategoria";
import { OBTER_CATEGORIAS } from "./queries";

export const useCategorias = () => {
    return useQuery<{ categorias: ICategoria[] }>(OBTER_CATEGORIAS);
};
