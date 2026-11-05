
import { useState, useEffect } from 'react'

const TableUsuarios = ({ dados }) => {

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
            <table className='table table-striped table-bordered'>
                <thead>
                    <tr className='text-uppercase'>
                        <th>#</th>
                        <th>nome</th>
                        <th>email</th>
                        <th>telefone</th>
                        <th>pais</th>
                    </tr>
                </thead>

                <tbody>
                    {dados.length === 0 ? (
                        <tr>
                            <td colSpan='5'>
                                Clique em <span className='fw-bold'>gerar usuários</span>
                            </td>
                        </tr>
                    ) : (
                        dadosExibidos.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.nome}</td>
                                <td>{user.email}</td>
                                <td>{user.telefone}</td>
                                <td>{user.pais}</td>
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
