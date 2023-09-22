import { Footer } from "./components/Footer/Footer"
import { FormularioTareas } from "./components/FormularioTareas/FormularioTareas"
import { Header } from "./components/Header/Header"
import { TareasAsignadas } from "./components/TareasAsignadas/TareasAsignadas"
import { useReducer } from "react";
import { tareaReducer } from "./reducers/tareaReducer";
import { useState } from "react";
import { useEffect } from "react";

//const App = () => <h

//const tareas = ["Estudiar React", "Ejercicios de Algebra Lineal", "Resumén de Contabilidad", "Resolver bugs", "Volver a estudiar React", "Hacer la tarea de POO", "Tarea de Física"]

export const App = () => {
    const init = () => {
        return JSON.parse(localStorage.getItem("tareas")) || []
    }
    
    const [state, dispatch] = useReducer(tareaReducer, [], init);
    
    const [descripcion, setDescripcion] = useState("");

    useEffect(() => {
        localStorage.setItem("tareas", JSON.stringify(state))
    }, [state])
    
    
    const handlerInputChange = (evento) => {
        setDescripcion(evento.target.value);
        console.log(descripcion);
    };
    
    const handlerSubmit = (evento) => {
        evento.preventDefault();
        console.log(evento)

        const tareaNueva = {
            id: new Date().getTime(), descripcion: descripcion, realizado: false
        }

        const action = {
            type: "agregar",
            payload: tareaNueva
        }
    
        dispatch(action)
        setDescripcion("")
    }

    const handlerCambiar = (id) => {
        dispatch({
            type: "cambiar",
            payload: id
        })
    }
    
    let tareasTerminadas = 0
    for (let i = 0; i < state.length; i++) {
        if (state[i].realizado === true) {
            tareasTerminadas++;
        }
    }
    let porcentaje = tareasTerminadas / state.length

    const handlerEliminar = (id) => {
        dispatch({
            type: "borrar",
            payload: id
        })
    }
    //console.log(porcentaje)

    return (
        <>
            <Header/>
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 mt-4 mb-2">
                        <FormularioTareas descripcion={descripcion} handlerInputChange={handlerInputChange} handlerSubmit={handlerSubmit}  />
                    </div>
                    <div className="col-sm-8 mt-4 mb-2">
                        <div className="row">
                        {
                            state.map((tarea, index)=>{
                                return (
                                    <TareasAsignadas key={index} handlerCambiar={handlerCambiar} id={tarea.id} index={index+1} tarea={tarea} handlerEliminar={handlerEliminar}/>
                                ); 
                            })
                        }
                        </div>
                    </div>
                </div>
            </div>
            <Footer porcentaje={porcentaje}/>
        </>
    )
}

// rafc
//export default App;