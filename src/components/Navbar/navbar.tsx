import { Link, useSearchParams } from 'react-router-dom'
import { useMemo } from 'react'
import styles from './navbar.module.css'

export const Navbar = () => {
  
  //get paràmetre view de URL
  let [searchParams, setSearchParams] = useSearchParams()
  const view = searchParams.get('view')
  //console.log(view)

  return (
    <>
      <div className={styles.navbar}>
        <ul>
          <li>
            <Link to={'/?view=grid'}>
              <div className={`${styles.boto} ${view === 'grid' ? styles.active : styles.no_active}`}>Grid</div>
            </Link>
          </li>
          <li>
            <Link to={'/?view=list'}>
              <div className={`${styles.boto} ${view === 'list' ? styles.active : styles.no_active}`}>List</div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}
