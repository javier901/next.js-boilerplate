import CSRProvider from '../components/CSRProvider'
import { useQuery, gql } from '@apollo/client'
import { User } from '../interfaces'
import Layout from '../components/Layout'
import styles from '../styles/grid.module.css'

const CSR = () => {
  return (
    <Layout title="This is CSR 👋">
      <CSRProvider>
        <Grid />
      </CSRProvider>
    </Layout>
  )
}

const QUERY = gql`
  query Users {
    users {
      code
      name
      emoji
    }
  }
`

const Grid = () => {
  const { data, loading, error } = useQuery(QUERY)

  if (loading) {
    return <h2>Loading...</h2>
  }
  if (error) {
    console.error(error)
    return null
  }
  const items: User[] = data.users

  return (
    <>
      <div className={styles.grid}>
        {items.map((item) => (
          <div key={item.code} className={styles.card}>
            <h3>{item.name}</h3>
            <p>
              {item.code} - {item.emoji}
            </p>
          </div>
        ))}
      </div>
    </>
  )
}

export default CSR
