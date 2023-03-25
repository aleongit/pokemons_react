import { useMemo, useState, useEffect } from 'react'
import { getPokemonsData, PokemonListType } from '../../lib/pokemons_lib'
import { Layout, PokemonList } from '../../components'
import styles from './home.module.css'

export const Home = () => {

  const [data, setData] = useState([])
  const [error, setError] = useState(undefined || String)
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    const response = await getPokemonsData()
    console.log(response)
    setData(response)
    console.log('fetch data')
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, []) //dependències, per evitar bucle infinit per només cridar quan cal

  if (error) {
    return <div>{error}</div>;
  }

  if (loading) {
    return <div>LOADING!</div>;
  }

  return (
    <>
      <Layout>
        <div className={styles.main}>
          <h1>Ei React! Estic a Home</h1>
          <PokemonList data = {data}/>
        </div>
      </Layout>
    </>
  )
}
