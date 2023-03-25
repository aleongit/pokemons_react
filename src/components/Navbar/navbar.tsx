import styles from './navbar.module.css'

export const Navbar = () => {
  return (
    <>
      <div className={styles.navbar}>
        <ul>
          <li>Grid</li>
          <li>List</li>
        </ul>
      </div>
    </>
  )
}
