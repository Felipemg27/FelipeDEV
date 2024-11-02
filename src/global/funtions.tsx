const formatDateToBR = (isoDate) => {
    const date = new Date(isoDate);

    // Extrai as partes da data
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    // Extrai as partes da hora
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    // Formata para o padrão brasileiro
    return `${day}.${month}.${year} ${hours}:${minutes}`;
};


export {
    formatDateToBR
}