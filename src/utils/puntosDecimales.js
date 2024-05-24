export const agregarPuntosMiles = (numero) => {
    // Convertir el número a cadena
    const strNumero = numero.toString();
    // Separar la parte entera y decimal
    const partes = strNumero.split(".");
    // Formatear la parte entera
    const parteEntera = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // Unir la parte entera y decimal
    const numeroFormateado = parteEntera + (partes.length > 1 ? "." + partes[1] : "");

    return numeroFormateado;
}