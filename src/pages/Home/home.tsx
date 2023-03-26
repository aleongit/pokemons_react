import { Layout, PokemonList } from '../../components'
import styles from './home.module.css'

export const Home = () => {
  return (
    <>
      <Layout>
        <div className={styles.main}>
          <PokemonList />
        </div>
      </Layout>
    </>
  )
}
