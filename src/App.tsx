import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import MenuLateral from './components/MenuLateral'
import Customers from './pages/customers/Customers'
import CategoriasTable from './pages/customers/CategoriasTable'
import CustomberUsuarios from './pages/customers/CustomberUsuarios'


import CustomerPago from './pages/customers/customersPago'
import CustumerAsignaciones from './pages/customers/CustumerAsignacion'



function App() {
  
  return (
    <>
    <Header />
    <main>
      <aside>
        <MenuLateral />
      </aside>

      <section id="contenido">
        <Routes>
          <Route path="/Categoria" element={<CategoriasTable/>} />
          <Route path="/Inscripcion" element={''} />
          <Route path="/Eventos" element={<Customers />} />
          <Route path="/Pago" element={<CustomerPago/>} />  
          <Route path="/Usuario" element={<CustomberUsuarios/>} />    
          <Route path="/Asignaciones" element={<CustumerAsignaciones/>} />  
        </Routes>
      </section>
    </main>

    </>
  )
}

export default App
