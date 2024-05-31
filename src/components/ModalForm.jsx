// depencias
import { useContext, useState } from "react";
// iconos
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
// servicios
import { addProduct } from "../services/product.service.js";
// context
import { productContext } from "../context/ProductoContext.jsx";


const ModalForm = () => {
    // contexto
    const { setIsModelOpen, setProducts, products } = useContext(productContext);

    // valores del formulario
    const [titulo, setTitulo] = useState('');
    const [precio, setPrecio] = useState('');
    const [stock, setStock] = useState('');
    const [descripcion, setDescripcion] = useState('');

    // handle submit
    const handleSubmit = async(e) => {
        e.preventDefault();
        const product = {
            titulo,
            descripcion,
            precio,
            stock
        }
        const createProduct = await addProduct(product);
        setProducts([...products, product]);
        setIsModelOpen(false);
    }


    return (
        <div className="absolute top-0 left-0 w-screen h-screen bg-[#0000008a] backdrop-blur-sm flex justify-center items-center">
            <form className="w-full max-w-[500px] bg-white py-10 px-4 rounded-lg relative" onSubmit={(e) => handleSubmit(e)}>
                <FontAwesomeIcon
                    className="absolute top-3 right-3 text-xl cursor-pointer"
                    icon={faXmarkCircle}
                    onClick={() => setIsModelOpen(false)}
                />
                <div className="pb-2 mb-5 border-b border-b-gray-300">
                    <h4 className="text-xl">Actualizar Producto</h4>
                </div>
                <div className="flex flex-col gap-4 border-b border-b-gray-300 pb-7">
                    <div className="flex flex-col">
                        <label className="">Titulo:</label>
                        <input
                            className="border p-2 rounded-md focus:bg-gray-100 transition-all focus:outline-none"
                            type="text"
                            onChange={(e) => setTitulo(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="">Precio:</label>
                        <input
                            className="border p-2 rounded-md focus:bg-gray-100 transition-all focus:outline-none"
                            type="number"
                            onChange={(e) => setPrecio(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="">Stock:</label>
                        <input
                            className="border p-2 rounded-md focus:bg-gray-100 transition-all focus:outline-none"
                            type="number"
                            onChange={(e) => setStock(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="">Descripcion:</label>
                        <textarea
                            className="border rounded-md focus:outline-none p-2 focus:bg-gray-100 transition-all h-[100px]"
                            onChange={(e) => setDescripcion(e.target.value)}
                        ></textarea>
                    </div>
                </div>

                <div className='py-4 flex w-full justify-end'>
                    <button
                        className='bg-green-500 text-white px-4 py-2 font-bold rounded-md'
                    >Agregar</button>
                </div>

                
            </form>
        </div>
    );
}

export default ModalForm;