import { Layout } from '../../components'
import styles from './notFound.module.css'

export const NotFound = () => {
  return (
    <>
      <Layout>
        <div className={styles.main}>
          <div className={styles.big}>Oops!</div>
          <h1>Pàgina no trobada</h1>
        </div>
      </Layout>
    </>
  )
}
