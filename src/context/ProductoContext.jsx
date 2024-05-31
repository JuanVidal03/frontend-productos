// dependecias
import { createContext, useState, useEffect } from "react";

export const productContext = createContext();

const ProductContextProvider = ({children}) => {
    
    // todos los productos
    const [products, setProducts] = useState([]);

    // abrir y cerrar modal
    const [isModelOpen, setIsModelOpen] = useState(false);
    
    return (
        <productContext.Provider value={{
            products,
            setProducts,
            isModelOpen,
            setIsModelOpen,
        }}>
           { children } 
        </productContext.Provider>
    );
}

export default ProductContextProvider;