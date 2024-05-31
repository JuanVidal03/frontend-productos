// depencias
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faFilePen, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
// utils
import { agregarPuntosMiles } from "../utils/puntosDecimales.js";
// servicios
import { deleteProductById } from "../services/product.service.js";
//contexto
import { productContext } from "../context/ProductoContext.jsx";


const TableRow = ({ product }) => {

    // actualizar la tabla
    const { products, setProducts } = useContext(productContext);

    const deleteProduct = async(id) => {
        try {
            // elimar producto de la db
            const deletedProduct = await deleteProductById(id);
            // eliminar producto producto de la copia que se hace aal hacer la peticion
            products.find(product => {
                product.id === id && products.splice(products.indexOf(product), 1);
            })
            setProducts([...products])

        } catch (error) {
            console.log(`Error al renderizar los productos: ${error}`);
            console.log(error);
        }
    }


    return (
        <tr className="w-full flex transition-all hover:bg-gray-100 border-b p-2">
            <td className="flex w-full items-center justify-center font-bold">{ product.id }</td>
            <td className="flex w-full items-center justify-center">{ product.titulo }</td>
            <td className="flex w-full items-center justify-center">{ product.descripcion }</td>
            <td className="flex w-full items-center justify-center">${ agregarPuntosMiles(product.precio) } COP</td>
            <td className="flex w-full items-center justify-center">{ product.stock }</td>
            <td className="flex w-full items-center justify-center">
                <div className="flex gap-3">
                    <FontAwesomeIcon className="text-lg py-[.18rem] cursor-pointer" icon={faCircleInfo}/>
                    <FontAwesomeIcon className="text-lg py-[.18rem] cursor-pointer text-blue-600" icon={faFilePen}/>
                    <FontAwesomeIcon className="text-lg py-[.18rem] cursor-pointer text-red-600" onClick={() => deleteProduct(product.id)} icon={faTrash}/>
                </div>
            </td>
        </tr>
    );
}

export default TableRow;
