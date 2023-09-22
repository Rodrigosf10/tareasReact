import { useState } from "react"
// Toda la logica van antes del "retorn"
// const [state, setState] = useState(initialState)
// if ternario: (condicion) : true ? false
export const TareasAsignadas = ({id, tarea, index, handlerCambiar, handlerEliminar}) => {
    
    return (
        <>
            <div className="col-lg-4 col-sm-6 mb-2">
                <div className={tarea.realizado ? "card bg-success shadow border-dark mb-3" : "card shadow border-dark mb-3"}>
                    <div className="card-header text-center border-dark border-bottom"><h3>Tarea {index}</h3></div>
                    <div className="card-body">
                        <div className="mb-3">
                            <p align="justify">{tarea.descripcion}</p>
                            <div className="d-grid mt-1">
                                <button onClick={() => handlerEliminar(id)} className="btn btn-danger" id="submitButton" type="submit">Borrar Tarea</button>
                            </div>
                            <div className="d-grid mt-1">
                                <button onClick={() => handlerCambiar(id)} className="btn btn-primary" id="submitButton" type="submit">{tarea.realizado ? "Deshacer Tarea" : "Finalizar tarea"}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}