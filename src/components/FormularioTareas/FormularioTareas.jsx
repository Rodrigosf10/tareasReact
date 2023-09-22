export const FormularioTareas = ({descripcion, handlerInputChange, handlerSubmit}) => {
    
    return (
        <>
            <div className="card border-dark shadow mb-3">
                <div className="card-header text-center border-dark border-bottom"><h3>Agregar Tarea</h3></div>
                <div className="card-body">
                    <div className="mb-3">
                        <form onSubmit={(e) => handlerSubmit(e)}>
                            <label htmlFor="tareaInput" className="form-label"><h5>Descripción de la tarea:</h5></label>
                            <input onChange={(e) => handlerInputChange(e)} type="text" className="form-control" id="tareaInput" aria-describedby="textHelp"/>
                            <div id="textHelp" className="form-text">We'll never share your texts with anyone else.</div>
                            <div className="d-grid mt-3">
                                <button className="btn btn-success" id="submitButton" type="submit">Agregar Tarea</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

/*
    Para crear formularios rapidos:
    b5-form-text
    Nota: Tener instalada la extension de Bootsrap 5 Snippets
*/

// aria-describedby="textHelp" es un atributo para ayuda a personas con discapacidad