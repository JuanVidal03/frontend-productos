// dependecias
import { createContext, useState, useEffect } from "react";

export const productContext = createContext();

const ProductContextProvider = ({children}) => {
    
    // todos los productos
    const [products, setProducts] = useState([]);
    
    return (
        <productContext.Provider value={{
            products,
            setProducts
        }}>
           { children } 
        </productContext.Provider>
    );
}

export default ProductContextProvider;
