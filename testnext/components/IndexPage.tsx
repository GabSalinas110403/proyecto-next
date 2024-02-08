"use client"
import { useState } from "react";
import Login from "./Login";
import Register from "./Registro";

const IndexPage = () =>{

    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState (false);

    const handleLoginClick = () =>{
        setShowLogin(true);
    }

    const handleRegisterClick = () =>{
        setShowRegister(true);
    }

    const handleCloseLogin = () =>{
        setShowLogin(false);
    }

    const handleCloseRegister = () =>{
        setShowRegister(false);
    }

    return(
        <div>
            <br/>
            <button onClick={handleLoginClick}>Iniciar sesion</button>
            {showLogin && <Login onClose={handleCloseLogin} />}
            <br/><br/>
            <button onClick={handleRegisterClick}>Registro</button>
            {showRegister && <Register onClose={handleCloseRegister} />}
        </div>
    )
}

export default IndexPage;