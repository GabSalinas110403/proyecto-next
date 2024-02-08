"use client"
import { useState } from "react"

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [showMessage, setMessage] = useState(false);


    function restaurar() {
        setCounter(0);
    }
    
    function decrementa() {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    }

    return(
        <div>
            <p>Haz hecho click {counter} veces</p>
            <button onClick={()=>{
                setCounter(counter+1);
            }}>
                CLick
            </button>

            <br></br><br></br>
            <button onClick={decrementa}>Decrementar</button>
            <br></br>

            <button onClick={restaurar}>Restaurar</button>

            <br></br><br></br>
            <button onClick={()=>{
                setMessage(!showMessage);
            }}>{!showMessage ? "Mostrar mensaje" : "Ocultar mensaje"}</button>
            {
            showMessage && <p>Hola mundo</p>
            }
        </div>  
    )



}

export default Counter;