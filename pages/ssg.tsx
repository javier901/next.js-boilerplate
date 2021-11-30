import { GetStaticProps } from 'next'
import { gql } from '@apollo/client'
import { User } from '../interfaces'
import client from '../graphql/client'
import Layout from '../components/Layout'
import styles from '../styles/grid.module.css'

type Props = {
  items: User[]
}

const SSG = ({ items }: Props) => {
  return (
    <Layout title="This is SSG 👋">
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

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: gql`
      query Users {
        users {
          code
          name
          emoji
        }
      }
    `,
  })
  const items: User[] = data.users
  return { props: { items } }
}

export default SSG
