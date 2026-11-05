
import { useState, useEffect } from 'react'

const TableUsuarios = ({ dados }) => {
    // if(!dados) return
    const [paginaAtual, setPaginaAtual] = useState(1)

    const registrosPorPagina = 20

    // Retorna para a primeira página quando os dados mudarem
    useEffect(() => {
        setPaginaAtual(1)
    }, [dados])

    const totalPaginas = Math.ceil(dados.length / registrosPorPagina)

    const indiceInicial = (paginaAtual - 1) * registrosPorPagina
    const indiceFinal = indiceInicial + registrosPorPagina

    const dadosExibidos = dados.slice(indiceInicial, indiceFinal)

    return (
        <>
            <table className='table overflow-scroll table-striped table-bordered'>
                <thead>
                    <tr className='text-uppercase'>
                        <th>#</th>
                        <th>nome</th>
                        <th>email</th>
                        <th>idade</th>
                        <th>cidade</th>
                        <th>estado</th>
                        <th>data cadastro</th>
                        <th>N° compras </th>
                        <th>Valor total</th>
                    </tr>
                </thead>

                <tbody>
                    {(dados.length == 0) ? (
                        <tr>
                            <td colSpan='8'>
                                Clique em <span className='fw-bold'>gerar usuários</span>
                            </td>
                        </tr>
                    ) : (
                        dadosExibidos.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.nome}</td>
                                <td>{user.email}</td>
                                <td>{user.idade}</td>
                                <td>{user.cidade}</td>
                                <td>{user.estado}</td>
                                <td>{String(user.dataCadastro)}</td>
                                <td>{user.numeroCompras}</td>
                                <td>{user.valorTotal}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>

            {dados.length > 0 && (
                <div className='d-flex justify-content-between align-items-center mt-3'>

                    <span>
                        Página {paginaAtual} de {totalPaginas}
                        {' | '}
                        Exibindo {dadosExibidos.length} de {dados.length} registros
                    </span>

                    <div className='d-flex gap-2'>
                        <button
                            className='btn btn-secondary'
                            disabled={paginaAtual === 1}
                            onClick={() => setPaginaAtual(p => p - 1)}
                        >
                            Anterior
                        </button>

                        <button
                            className='btn btn-primary'
                            disabled={paginaAtual === totalPaginas}
                            onClick={() => setPaginaAtual(p => p + 1)}
                        >
                            Próxima
                        </button>
                    </div>

                </div>
            )}
        </>
    )
}

export default TableUsuarios
