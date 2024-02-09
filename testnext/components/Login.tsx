'use client';
import Link from "next/link";
import { useState } from "react";
import formStyles from "../styles/formStyles.module.css"

const Login = ({onClose}:any) =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handledLogin = () =>{
        console.log(`Email: ${email} | y | Password: ${password}`);
        
    }
return(
    <div className={formStyles.modal}>
        <div className={formStyles.modal_content}>
            <h2>Inciar sesion</h2>
            <label htmlFor="email">Correo: </label>
            <input type="email" name="email" id="email" value={email} onChange={(e)=>{
                e.preventDefault();
                setEmail(e.target.value);
            }}/>
            <br />
            <label htmlFor="password">Contraseña: </label>
            <input type="password" name="password" id="password"  value={password} onChange={(e)=>{
                e.preventDefault();
                setPassword(e.target.value);
            }}/>
            <br />
            <button onClick={handledLogin}>Iniciar sesion</button>
            <p>¿No tienes cuenta?<Link href="/pages/registro">Registrese</Link></p>
            <button onClick={onClose}>Cerrar</button>
        </div>
    </div>
)

}

export default Login;