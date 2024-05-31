import axios from "axios";

const url = 'http://localhost:8080/api/api.php';

// obtener todos los productos
export const getAllProducts = async () => {
    try {

        const productos = await axios.get(url);
        return productos.data;

    } catch (error) {
        console.log(`Error al obtener los productos: ${error}`);
        console.log(error);
    }
}

// eliminar producto
export const deleteProductById = async(id) => {
    try {

        const productDeleted = await axios.delete(`${url}/${id}`);
        return productDeleted;
        
    } catch (error) {
        console.log(`Error al eliminar producto con id: ${id} -- ${error}`);
        console.log(error);
    }
}