import { Link, useSearchParams } from 'react-router-dom'
import { getPokemonsData, PokemonListType } from '../../lib/pokemons_lib'
import styles from './pokemonList.module.css'

interface iPokemonList {
    data: any[];
}

export const PokemonList = ({ data }:iPokemonList) => {
  //get paràmetre view de URL
  let [searchParams, setSearchParams] = useSearchParams()
  const view = searchParams.get('view')
  //console.log(view)

  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>The Pokemon list!</h1>

          <p className={styles.description}>Click Pokemon! </p>

            <div>
              <ul className={view === 'list' ? styles.list : styles.grid}>
                {data.map((pokemon: PokemonListType, index: number) => (
                  <Link to={`/${pokemon.name}`} key={index}>
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
