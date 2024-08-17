import React from 'react'
import CustomerTable from './EntrenadoresTable'


const Customers = () => {
  return (
    <>
        <h1 className='header-section-create'>Lista de Entrenadores
            <button>Nuevo Entrenador</button>
        </h1>
        <hr />
        <CustomerTable />


    </>
  )
}

export default Customers