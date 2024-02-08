"use client"
import { useState } from "react"
import Link from "next/link"
import formStyles from "@/styles/formStyles.module.css"

const Register = ({ onClose }: any) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleRegister = () => {
        console.log(`registro de correo: ${email}, y contrasena: ${password}`)

    }

    return (
        <div className={formStyles.modal}>
            <div className={formStyles.modal_content}>
                <label htmlFor="email">Correo: </label>
                <input className={formStyles.input}
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => {
                        e.preventDefault()
                        setEmail(e.target.value)
                    }} />
                <br /><br />
                <label htmlFor="password">Contraseña: </label>
                <input className={formStyles.input}
                    type="password"
                    id="password" value={password}
                    onChange={(e) => {
                        e.preventDefault()
                        setPassword(e.target.value)
                    }} />
                <br /><br />
                <button className={formStyles.button} onClick={handleRegister}> Registrar </button>
                <br /><br />
                <p> ¿Ya tienes cuenta? <Link href="#">iniciar sesion</Link></p>
                <br />
                <button className={formStyles.button} onClick={onClose}>Cerrar</button>
            </div>
        </div>
    );
}

export default Register;