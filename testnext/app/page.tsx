import styles from "@/styles/styles.module.css"
import IndexPage from "@/components/IndexPage"

export default function Home() {
  return (
      <div className={styles.container}>
        <div className={styles.content}>

          <h1>Hola mundo c:</h1>
          <h2>Maldonado Salinas Angel Gabriel</h2>
          <h2>TI02SM-22</h2>
          <h2>UTSJR</h2>
          <IndexPage/>

        </div>
      </div>
  )
}