import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
  url?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <h1 className="text-center m-10 text-4xl">{title}</h1>
    <header>
      <ul className="flex justify-center mb-10">
        <Item url="/ssg" title="SSG" />
        <Item url="/ssr" title="SSR" />
        <Item url="/csr" title="CSR" />
      </ul>
    </header>
    {children}
  </div>
)

const Item = ({ url = '/', title = 'default text' }: Props) => (
  <li className="flex-2 mr-10">
    <Link href={url}>
      <a className="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white">
        {title}
      </a>
    </Link>
  </li>
)

export default Layout
