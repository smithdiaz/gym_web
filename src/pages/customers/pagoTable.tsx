import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable from "react-data-table-component";

const PagoTable = () => {
    const [rows, setRows] = useState([]);// Almacenar datos

    useEffect(() => { // Obtener datos en cada render
        const fetchData = async () => {
             const response = await axios.get("http://localhost:3000/pagos");
             setRows(response.data);
         };
         fetchData();
     }, []);

    interface Row {
        ID_Pago: number;
        Tipo_Pago: number;
        ID_Cliente: number;


    }
    
    const editarCustomer = (id: number) => () => {
        alert(id);
    }

    const eliminarCustomer = (id: number) => () => {
        alert(id);
    }

    const columns = [
        {
            name: "ID_Pago",
            selector: (row: Row) => row.ID_Pago
        },
        {
            name: "ID_Cliente",
            selector: (row: Row) => row.ID_Cliente
        },
        {
            name: "Tipo_Pago",
            selector: (row: Row) => row.Tipo_Pago
        },
        
        {
            name: "Acciones",
            cell: (row: Row) => <><div id='tableButtons'>
                <button onClick={editarCustomer(row.ID_Cliente)} className="btn btn-primary"><i className="material-icons-outlined">edit</i></button>
                <button onClick={eliminarCustomer(row.ID_Cliente)} className="btn btn-primary"><i className="material-icons-outlined">delete_forever</i></button>
            </div>
            </>
        }
    ];

  return (
    <div className="container my-5">
        <DataTable columns={columns} data={rows} pagination selectableRows />
    </div>
  )
}

export default PagoTable