import React from 'react';

const ButtonDownload = ({ dados }) => {

    function exportarCSV() {

        if (!dados || dados.length === 0) {
            alert("Não existem dados para exportar");
            return;
        }

        // Colunas que serão exportadas
        const cabecalho = ['id', 'nome', 'email', 'idade', 'cidade', 'estado','dataCadastro','numeroCompras','valorTotal'];

        // Converter os dados em CSV
        const linhas = dados.map(usuario =>
            cabecalho.map(coluna =>
                `"${String(usuario[coluna] ?? "").replace(/"/g, '""')}"`
            ).join(";")
        );

        const csv = [
            cabecalho.join(";"),
            ...linhas
        ].join("\n");

        // Criar arquivo CSV
        const blob = new Blob(
            ["\uFEFF" + csv],
            { type: "text/csv;charset=utf-8;" }
        );

        // Criar URL temporária
        const url = URL.createObjectURL(blob);

        // Criar link de download
        const link = document.createElement("a");

        link.href = url;
        link.download = "usuarios.csv";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Liberar URL
        setTimeout(() => URL.revokeObjectURL(url), 1000);
    }

    return (
        <button
            type="button"
            onClick={exportarCSV}
            className="btn btn-success"
        >
            Baixar CSV
        </button>
    );
};

export default ButtonDownload;