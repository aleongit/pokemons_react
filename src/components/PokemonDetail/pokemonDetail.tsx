import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getPokemonData } from '../../lib/pokemonsLib'
import { Layout } from '../../components'
import styles from './pokemonDetail.module.css'

export const PokemonDetail = () => {

  //get id
  const { id } = useParams()
  console.log(id)

  const [data, setData]: any = useState({})
  const [error, setError] = useState(undefined || String)
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    //const response = await getPokemonsData()
    const response = await getPokemonData(id)
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
    return <div>LOADING!</div>
  }

  return (
    <>
      <Layout>
        <div className={styles.container}>
          <main className={styles.main}>
            <h1 className={styles.title}>{data.name} !</h1>
            <p className={styles.description}>id_____ {data.id}</p>
            <div className="img">
              <img src={data.sprites.front_default} alt={data.name} width={200}></img>
            </div>
          </main>
        </div>
      </Layout>
    </>
  )
}
