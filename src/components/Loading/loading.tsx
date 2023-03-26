import { Layout } from '../../components'
import styles from './loading.module.css'

export const Loading = () => {
  return (
    <>
      <Layout>
        <div className={styles.main}>
          <div className={styles.big}>Loading!</div>
        </div>
      </Layout>
    </>
  )
}
