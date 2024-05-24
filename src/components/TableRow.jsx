// depencias
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faFilePen, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
//utils
import { agregarPuntosMiles } from "../utils/puntosDecimales.js";

const TableRow = ({ product }) => {
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
                    <FontAwesomeIcon className="text-lg py-[.18rem] cursor-pointer text-red-600" icon={faTrash}/>
                </div>
            </td>
        </tr>
    );
}

export default TableRow;
