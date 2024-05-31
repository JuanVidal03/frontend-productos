import { useState, useEffect, useContext } from 'react';
// componentes
import Table from './components/Table.jsx';
import ModalForm from './components/ModalForm.jsx';
// contexto
import { productContext } from './context/ProductoContext.jsx';


const App = () => {

  const { isModelOpen, setIsModelOpen } = useContext(productContext);

  return (
    <div className='p-12 relative'>
      <Table/>
      <div className='py-4'>
        <button
          onClick={() => setIsModelOpen(true)}
          className='bg-green-500 text-white px-4 py-2 font-bold rounded-md'
        >Agregar</button>
      </div>
      {
        isModelOpen && <ModalForm/>
      }
    </ div>
  )
}

export default App