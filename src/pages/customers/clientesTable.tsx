import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DataTable from "react-data-table-component";

const CustomerTable = () => {
    const [rows, setRows] = useState([]);// Almacenar datos

    useEffect(() => { // Obtener datos en cada render
        const fetchData = async () => {
             const response = await axios.get("http://localhost:3000/Clientes");
             setRows(response.data);
         };
         fetchData();
     }, []);

    interface Row {
        ID_Cliente: number;
        P_Nombre:string;
       S_Nombre: string;
       P_Apellido: string;
       S_Apellido: string;
       Direccion: string;
       Correo: string;
       Telefono: number;
       Edad:number;
       
    }
    
    const editarCustomer = (id: number) => () => {
        alert(id);
    }

    const eliminarCustomer = (id: number) => () => {
        alert(id);
    }

    const columns = [
        {
            name: "id_cliente",
            selector: (row: Row) => row.ID_Cliente
        },
        {
            name: " P_Nombre",
            selector: (row: Row) => row.P_Nombre
        },
        {
            name: "Segundo nombre",
            selector: (row: Row) => row.S_Nombre
        },
        {
            name: "primer apellido:",
            selector: (row: Row) => row.P_Apellido
        },
        {
            name: "segundo apellido",
            selector: (row: Row) => row.S_Apellido
        },
        {
            name: "correo",
            selector: (row: Row) => row.Correo
        },
        {
            name: "telefono",
            selector: (row: Row) => row.Telefono
        },
        {
            name: "edad",
            selector: (row: Row) => row.Edad
        },
        


        {
            name: "Entrenadores",
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

export default CustomerTable