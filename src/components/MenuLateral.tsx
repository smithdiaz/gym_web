import React from 'react'
import { Link } from 'react-router-dom'

const MenuLateral = () => {
  return (
    <nav>
        <ul id="menu_principal">
        
        <li>
            <Link to="Categoria/"><i className="material-icons-outlined">home</i>Categoria </Link>
        </li>
        
        <li>
            <Link to="/Eventos"><i className="material-icons-outlined">local_grocery_store</i> Entrenadores</Link>
         </li>
        <li>
            <Link to="/Inscripcion"><i className="material-icons-outlined">groups</i> Inscripcion</Link>
        </li>
        
        <li>
         <Link to="/Pago"><i className="material-icons-outlined">home</i> Pago</Link>
        </li>

        <li>
         <Link to="/Usuario"><i className="material-icons-outlined">home</i> Clientes</Link>
        </li>

        <li>
         <Link to="/Asignaciones"><i className="material-icons-outlined">home</i> Asignaciones</Link>
        </li>

         </ul>
    </nav>
  )
} 

export default MenuLateral