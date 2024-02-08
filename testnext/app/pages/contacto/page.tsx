import Head from "next/head"
import Link from "next/link"
import styles from "@/styles/styles.module.css"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"


export default function Home() {
  return (
      <div className={styles.container}>

        {/* Navbarl */}
        <Navbar/>
        
        {/* Contenido Principal */}
        <div className={styles.content}>
          <h1>Pagina de contacto</h1>
          <h2>Telefono: 4481269204</h2>
          <h2>Correo: gabrielms.ti22@utsjr.edu.mx</h2>

        </div>

        {/* Contenido footer */}
        <Footer/>

      </div>
  )
}