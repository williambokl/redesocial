class DataHelper {
    static textoParaData (texto) {
        return new Date(...texto
            .split('-')
            .map((item,indice) => item - indice % 2)
        );
    }
}