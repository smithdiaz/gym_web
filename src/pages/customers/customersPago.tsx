import React from 'react'

import PagoTable from './pagoTable'


const CustomersPago = () => {
  return (
    <>
        <h1 className='header-section-create'>Lista de Pagos
            <button>Nuevo Pago</button>
        </h1>
        <hr />
        <PagoTable/>
       


    </>
  )
}

export default CustomersPago