import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DataTable from "react-data-table-component";
import Swal from 'sweetalert2';

//
interface Row {
    ID_Entrenador: number;
        P_Nombre:string;
       S_Nombre: string;
       P_Apellido: string;
       S_Apellido: string;
       Correo: string;
       Telefono: number;
       Especializacion:string;
}

const CustomerTable: React.FC = () => {
    const [rows, setRows] = useState<Row[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3000/entrenadores");
                setRows(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchData();
    }, []);

    const editarCustomer = (row: Row) => () => {

    }

  

    const eliminarCustomer = (row: Row) => () => {
        Swal.fire({
            title: "¿Estás seguro?",
            text: "¡Esta acción no se puede revertir!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "¡Sí, estoy seguro!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await axios.delete(`http://localhost:3000/entrenadores/${row.Especializacion}`);
                    setRows(prevRows => prevRows.filter(r => r.Especializacion !== row.Especializacion)); 
                    Swal.fire({
                        title: "¡Eliminado!",
                        text: "La columna entrenador ha sido eliminado.",
                        icon: "success"
                    });
                } catch (error) {
                    console.error("Error deleting event:", error);
                    Swal.fire({
                        title: "Error",
                        text: "No se pudo elimina la columna entrenador.",
                        icon: "error"
                    });
                }
            }
        });
    }

    const columns = [
        {
            name: "ID entrenadores",
            selector: (row: Row) => row.ID_Entrenador,
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
            name: "Especializacion",
            selector: (row: Row) => row.Especializacion
        },
        
        {
            name: "Acciones",
            cell: (row: Row) => (
                <div id='tableButtons'>
                    <button onClick={editarCustomer(row)} className="btn btn-primary">
                        <i className="material-icons-outlined">edit</i>
                    </button>
                    <button onClick={eliminarCustomer(row)} className="btn btn-danger">
                        <i className="material-icons-outlined">delete_forever</i>
                    </button>
                </div>
            )
        }
    ];

    return (
        <div className="container my-5">
            <DataTable columns={columns} data={rows} pagination selectableRows />
        </div>
    );
}

export default CustomerTable;
