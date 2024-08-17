import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable from "react-data-table-component";

const AsignacionesTable = () => {
    const [rows, setRows] = useState([]);// Almacenar datos

    useEffect(() => { // Obtener datos en cada render
        const fetchData = async () => {
             const response = await axios.get("http://localhost:3000/asignaciones");
             setRows(response.data);
         };
         fetchData();
     }, []);

    interface Row {
        ID_Asignacion: number;
        ID_Entrenador: number;
        ID_Miembro: number;
        ID_Rutina: number;
        Fecha_De_Asignacion: number;

    }
    
    const editarCustomer = (id: number) => () => {
        alert(id);
    }

    const eliminarCustomer = (id: number) => () => {
        alert(id);
    }

    const columns = [
        {
            name: "Id_Asignacion",
            selector: (row: Row) => row.ID_Asignacion
        },
        {
            name: "Id_miembro",
            selector: (row: Row) => row.ID_Miembro
        },
        {
            name: "Id_Entrenador",
            selector: (row: Row) => row.ID_Entrenador
        },
        {
            name: "Id_Rutina",
            selector: (row: Row) => row.ID_Rutina
        },
        {
            name: "Fecha de asignacion",
            selector: (row: Row) => row.Fecha_De_Asignacion
        },

        {
            name: "Asignaciones",
            cell: (row: Row) => <><div id='tableButtons'>
                <button onClick={editarCustomer(row.ID_Asignacion)} className="btn btn-primary"><i className="material-icons-outlined">edit</i></button>
                <button onClick={eliminarCustomer(row.ID_Asignacion)} className="btn btn-primary"><i className="material-icons-outlined">delete_forever</i></button>
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

export default AsignacionesTable