import Layout from "../components/template/Layout";
import useAppData from "../data/hook/useAppData";

export default function Notificacoes() {

    const dados = useAppData()

    return (
        <Layout titulo="Notificacoes"
        subtitulo="Aqui voce ira gerenciar as suas notificacoes!">
            <h3>Conteudo!!!</h3>
            <h3>{dados.nome}</h3>
        </Layout>
    )
}