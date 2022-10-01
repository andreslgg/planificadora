import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Presupuesto from './components/Presupuesto';
import Restante from './components/Restante';
import GastosTotales from './components/GastosTotales';
import ListaGastos from './components/ListaGastos';
import AgregarGasto from './components/AgregarGasto';

import { AppProvider } from './context/AppContext';

const App = () => {
  return (
    <AppProvider>
<div className='container'>
      <h1 className='mt-3'>Planificadora de gastos</h1>
      <div className='col-sm'>
        <Presupuesto />
      </div>
      <div className='col-sm'>
        <Restante />
      </div>
      <div className='col-sm'>
        <GastosTotales />
      </div>
      <h3 className='mt-3'>Gastos</h3>
      <div className='row mt-3'>
        <div className='col-sm'>
          <ListaGastos />
        </div>
      </div>
      <h3 className='mt-3'>Agregar Gasto</h3>
      <div className='mt-3'>
        <div className='col-sm'>
          <AgregarGasto />
        </div>
      </div>
    </div>
    </AppProvider>
    
  )
}

export default App;