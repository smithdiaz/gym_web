import React from 'react'

import UsuariosTable from './clientesTable'


const CustomerUsuarios = () => {
  return (
    <>
        <h1 className='header-section-create'>Lista de clientes
            <button>Nuevo Cliente</button>
        </h1>
        <hr />
        <UsuariosTable/>


    </>
  )
}

export default CustomerUsuarios