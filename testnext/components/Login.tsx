"use client"
import { useState } from "react"
import Link from "next/link"
import formStyles from "@/styles/formStyles.module.css"

const Login = ({ onClose }: any) => {
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        console.log(`Login con correo: ${email}, y contrasena: ${password}`);
    }

    return (
        <div className={formStyles.modal}>
            <div className={formStyles.modal_content}>
                <label htmlFor="email">Correo: </label>
                <br />
                <input className={formStyles.input}
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => {
                        e.preventDefault()
                        setEmail(e.target.value)
                    }} />
                <br />
                <label htmlFor="password">Contraseña: </label>
                <input className={formStyles.input}
                    type="password"
                    id="password" value={password}
                    onChange={(e) => {
                        e.preventDefault()
                        setPassword(e.target.value)
                    }} />
                <br />
                <button className={formStyles.button} onClick={handleLogin}> Login </button>
                <br /><br />
                <p> ¿No tienes cuenta? <Link href="/pages/registro">Registrate</Link></p>
                <br />
                <button className={formStyles.button} onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
}

export default Login;