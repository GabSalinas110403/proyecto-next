import Head from "next/head"
import Link from "next/link"
import styles from "@/styles/styles.module.css"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"


export default function Home() {
  return (
      <div className={styles.container}>

        <Navbar/>
        {/* Contenido Principal */}
        <div className={styles.content}>
          <h1>Estas en la pagina de sesion</h1>
          
        </div>

        {/* Contenido footer */}
        <Footer/>

      </div>
  )
}