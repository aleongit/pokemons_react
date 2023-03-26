import { Link, useSearchParams } from 'react-router-dom'
import { useMemo } from 'react'

import styles from './pagination.module.css'

interface IPagination {
  pageCount: number
  currentPage: string
}

export const Pagination = ({ pageCount, currentPage }: IPagination) => {
  //get paràmetre URL
  let [searchParams] = useSearchParams()
  const view = searchParams.get('view')
  //console.log(view)
  //console.log('a pagination!')
  //console.log(currentPage)

  const paginationRange = useMemo(() => {
    let range = []
    for (let i = 1; i <= pageCount; i++) {
      range.push(i)
    }
    return range
  }, [pageCount])

  return (
    <nav>
      <ul className={`${styles['container']}`}>
        <>
          <li>
            <Link to={`?view=${view}&page=1`} className={`${styles['item']}`}>
              {'<<'}
            </Link>
          </li>
          <li>
            <Link
              to={`?view=${view}&page=${parseInt(currentPage) > 1 ? parseInt(currentPage) - 1 : 1}`}
              className={`${styles['item']}`}
            >
              {'<'}
            </Link>
          </li>
        </>
        {paginationRange.map((pageNumber) => {
          return (
            <li key={pageNumber}>
              <Link
                to={`?view=${view}&page=${pageNumber}`}
                className={`${
                  pageNumber === parseInt(currentPage) ? styles['item_active'] : null
                } ${styles['item']}`}
              >
                {pageNumber}
              </Link>
            </li>
          )
        })}
        <>
          <li>
            <Link
              to={`?view=${view}&page=${
                parseInt(currentPage) < pageCount ? parseInt(currentPage) + 1 : pageCount
              }`}
              className={`${styles['item']}`}
            >
              {'>'}
            </Link>
          </li>
          <li>
            <Link to={`?view=${view}&page=${pageCount}`} className={`${styles['item']}`}>
              {'>>'}
            </Link>
          </li>
        </>
      </ul>
    </nav>
  )
}
