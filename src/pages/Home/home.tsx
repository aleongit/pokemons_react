import { useState, useEffect } from 'react'
import { getPokemonsData } from '../../lib/pokemonsLib'
import { Layout, PokemonList, Loading } from '../../components'
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
  }, []) //dependències

  if (error) {
    return <div>{error}</div>
  }

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <Layout>
        <div className={styles.main}>
          <PokemonList data={data} />
        </div>
      </Layout>
    </>
  )
}
