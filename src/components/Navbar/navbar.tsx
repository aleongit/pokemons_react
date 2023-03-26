import { Link, useSearchParams } from 'react-router-dom'
import styles from './navbar.module.css'

export const Navbar = () => {
  
  //get paràmetre view de URL
  let [searchParams, setSearchParams] = useSearchParams()
  const view = searchParams.get('view')
  const page = searchParams.get('page')
  //console.log(view)

  return (
    <>
      <div className={styles.navbar}>
        <ul>
          <li>
            <Link to={`/?view=grid&page=${page}`}>
              <div className={`${styles.boto} ${view === 'grid' ? styles.active : styles.no_active}`}>Grid</div>
            </Link>
          </li>
          <li>
            <Link to={`/?view=list&page=${page}`}>
              <div className={`${styles.boto} ${view === 'list' ? styles.active : styles.no_active}`}>List</div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}
