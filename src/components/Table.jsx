// dependencias
import { useState, useEffect, useContext } from "react";
// componentes
import TableRow from "./TableRow.jsx";
// servicios
import { getAllProducts } from "../services/product.service.js";
// contexto
import { productContext } from "../context/ProductoContext.jsx";

const Table = () => {

    // usando el contexto
    const { products, setProducts } = useContext(productContext);

    // renderizando productos, cada vez que detecta un cambio en el array de productos
    useEffect(() => {
        const fetchData = async() => {
            const products = await getAllProducts();
            setProducts(products)
        }
        fetchData();
    }, [products.length]);


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
                    products?.map((product, index) => (
                        <TableRow
                        key={index}
                        product={product}
                        />
                    ))
                }
            </tbody>
        </table>
    );
}

export default Table;
