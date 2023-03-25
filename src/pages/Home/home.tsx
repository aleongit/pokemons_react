import { Layout } from '../../components'
import styles from './home.module.css'

export const Home = () => {
  return (
    <>
      <Layout>
        <div className={styles.main}>
          <h1>Ei React! Estic a Home</h1>
        </div>
      </Layout>
    </>
  )
}
