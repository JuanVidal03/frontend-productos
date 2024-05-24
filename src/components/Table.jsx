// dependencias
import { useState, useEffect } from "react";

// componentes
import TableRow from "./TableRow.jsx";
// servicios
import { getAllProducts } from "../services/product.service.js";

const Table = () => {

    // almacenando los productos
  const [products, setProducts] = useState([]);

  // renderizando productos
  useEffect(() => {
    const fetchData = async() => {
      const products = await getAllProducts();
      setProducts(products)
    }
    fetchData();
  }, []);


    return (
        <table className="w-full">
            <thead className="flex w-full">
                <tr className="w-full flex justify-center border-b p-2 font-bold bg-gray-900 text-white">
                    <th className="flex w-full items-center justify-center">ID</th>
                    <th className="flex w-full items-center justify-center">Titulo</th>
                    <th className="flex w-full items-center justify-center">Descripcion</th>
                    <th className="flex w-full items-center justify-center">Precio</th>
                    <th className="flex w-full items-center justify-center">Stock</th>
                    <th className="flex w-full items-center justify-center">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    products?.map(product => (
                        <TableRow
                        key={product.id}
                        product={product}
                        />
                    ))
                }
            </tbody>
            
            
        </table>
    );
}

export default Table;
