import React from 'react'

import AsignacionesTable from './AsignacionesTable'


const CustomerUsuarios = () => {
  return (
    <>
        <h1 className='header-section-create'>Lista de asignaciones
            <button>Nuevo asignacion</button>
        </h1>
        <hr />
        <AsignacionesTable/>


    </>
  )
}

export default CustomerUsuarios