import styles from "@/styles/styles.module.css"

const Navbar = () => {
    return(
         /* <Head>
          <title>Mi pagina web</title>
          <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
          <meta name="viewport" content="width=deviced-width, initial-scale=1, shrink-to-fit-=no"/>
        </Head> */

        <nav className={styles.navbar}>
        <a href="/" className={styles.navbarBrand}>Home</a>
        <ul className={styles.navbarNav}>
          <li className={styles.navbarItem}>
            <a href="/pages/ayuda" className={styles.navLink}>Ayuda</a> 
          </li>
          <li className={styles.navbarItem}>
            <a href="/pages/contacto" className={styles.navLink}>Contacto</a> 
          </li>
          <li className={styles.navbarItem}>
            <a href="/pages/sesion" className={styles.navLink}>Sesión</a>
          </li>
          <li className={styles.navbarItem}>
            <a href="/pages/registro" className={styles.navLink}>Registro</a>
          </li>
        </ul>
      </nav>
    );
}

export default Navbar;