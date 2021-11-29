import { GetServerSideProps } from 'next'
import { gql } from '@apollo/client'
import { Country } from '../interfaces'
import client from '../graphql/client'
import Layout from '../components/Layout'
import styles from '../styles/grid.module.css'

type Props = {
  items: Country[]
}

const SSR = ({ items }: Props) => {
  return (
    <Layout title="This is SSR 👋">
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
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query({
    query: gql`
      query Countries {
        countries {
          code
          name
          emoji
        }
      }
    `,
  })
  const items: Country[] = data.countries
  return { props: { items } }
}

export default SSR
