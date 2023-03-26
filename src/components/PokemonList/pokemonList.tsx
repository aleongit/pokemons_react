import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import {
  getTotalPokemons,
  getPokemonsData,
  PokemonListType,
  getIdPokemon,
  ITEMS_PAGE,
} from '../../lib/pokemonsLib'
import { Loading, Pagination } from '../../components'
import styles from './pokemonList.module.css'

export const PokemonList = () => {
  const [data, setData] = useState([])
  const [error] = useState(undefined || String)
  const [loading, setLoading] = useState(true)

  //paginate
  // We start with an empty list of items.
  const [pageCount, setPageCount] = useState(0)
  const [currentPage, setcurrentPage] = useState('1')

  //get paràmetre view de URL
  let [searchParams] = useSearchParams()
  let view = searchParams.get('view')
  let page = searchParams.get('page') ?? '1'
  //console.log(view)
  //console.log(page)

  const fetchTotalData = async () => {
    const response = await getTotalPokemons()
    //console.log(response)
    setPageCount(response / ITEMS_PAGE)
  }

  const fetchData = async () => {
    const response = await getPokemonsData(ITEMS_PAGE, (parseInt(page) - 1) * ITEMS_PAGE)
    //console.log(response)
    setData(response)
    console.log('fetch data')
    setLoading(false)
  }

  useEffect(() => {
    setcurrentPage(page)
    fetchTotalData()
    fetchData()
  }, [searchParams]) //dependències

  if (error) {
    return <div>{error}</div>
  }

  if (loading) {
    return <Loading />
  }

  return (
    <>
      <Pagination pageCount={pageCount} currentPage={currentPage} />

      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>The Pokemon list!</h1>

          <p className={styles.description}>Click Pokemon! </p>

          <div>
            <ul className={view === 'list' ? styles.list : styles.grid}>
              {data.map((pokemon: PokemonListType, index: number) => (
                <Link
                  to={`/pokemon/${getIdPokemon(pokemon.url)}?view=${view}&page=${page}`}
                  key={index}
                >
                  <li
                    className={
                      view === 'list'
                        ? `${styles.card} ${styles.card_list}`
                        : `${styles.card} ${styles.card_grid}`
                    }
                    key={index}
                  >
                    {pokemon.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </>
  )
}
